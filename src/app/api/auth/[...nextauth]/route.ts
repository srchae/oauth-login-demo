import NextAuth, { NextAuthOptions } from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";

import { api } from "@/services/api";

export const authOptions: NextAuthOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || "",
      clientSecret: process.env.KAKAO_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      console.log("카카오 프로필", profile);
      const email = profile?.kakao_account?.email;
      const name = profile?.properties?.nickname;

      const response = await api.postAuthCheckSocial(email!);

      if (response.exists) return true;

      const requestData = { email: email!, name: name! };
      await api.postRegister(requestData);
      return true;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
