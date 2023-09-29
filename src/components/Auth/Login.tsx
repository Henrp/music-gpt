"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";
import GoogleIcon from "../ui/GoogleIcon";

export default function Login() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <Image
          className="pr-3"
          src="/logo.png"
          width={60}
          height={60}
          alt="logo"
        />
        <div className="text-3xl font-semibold">MusicGPT</div>
      </div>

      <button
        className="mt-4 flex justify-center items-center py-3 px-10 
           rounded-xl bg-white hover:bg-neutral-100 transition-colors"
        onClick={() => signIn("google")}
      >
        <GoogleIcon />
        <p className="ml-2 text-xl text-neutral-6700">Sign in with Google</p>
      </button>
    </div>
  );
}
