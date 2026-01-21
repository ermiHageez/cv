"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthTest() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="flex justify-center">
        <button
          onClick={() => signIn("github")}
          className="
            flex items-center gap-2
            rounded-md bg-black px-5 py-2.5
            text-sm font-medium text-white
            transition hover:bg-gray-800
            focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2
          "
        >
          Login with GitHub
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between gap-4 rounded-lg border bg-white px-4 py-1 shadow-sm ">
      <div className="text-sm text-gray-700">
        <span className="font-semibold text-black">
          {session.user?.name}
        </span>
      </div>

      <button
        onClick={() => signOut()}
        className="
          rounded-md border border-gray-300
          px-4 py-2 text-sm font-medium text-gray-700
          transition hover:bg-gray-100
          focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2
        "
      >
        Logout
      </button>
    </div>
  );
}
