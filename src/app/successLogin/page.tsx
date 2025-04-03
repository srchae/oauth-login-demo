"use client";
import { useEffect } from "react";

import { signOut, useSession } from "next-auth/react";
import { toast, ToastContainer } from "react-toastify";

export default function SuccessLoginPage() {
  const { data: session } = useSession();

  useEffect(() => {
    toast.success("로그인이 완료되었습니다.", {
      hideProgressBar: true,
      autoClose: 2000,
      style: {
        backgroundColor: "#333333",
        color: "#fff",
      },
    });
  }, []);

  return (
    <>
      <ToastContainer position="top-center" />
      {session?.user?.name ? (
        <>
          <p>{session.user.name}님 안녕하세요!</p>
          <button
            onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
            className="cursor-pointer rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
          >
            로그아웃
          </button>
        </>
      ) : (
        <div>SuccessLogin</div>
      )}
    </>
  );
}
