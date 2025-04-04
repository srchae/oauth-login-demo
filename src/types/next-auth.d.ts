import "next-auth";

declare module "next-auth" {
  interface Profile {
    kakao_account?: {
      email?: string;
      email_needs_agreement?: boolean;
    };
    properties?: {
      nickname?: string;
    };
  }
}
