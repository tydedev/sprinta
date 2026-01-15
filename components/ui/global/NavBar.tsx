"use client";

import { Button } from "../button";
import { Logo } from "./Logo";
import { useRouter } from "next/navigation";

export const NavBar = () => {
  const router = useRouter();
  return (
    <nav className="flex items-center h-12 px-3">
      <Logo size="sm" isLink />
      <div className="ml-auto flex gap-2">
        <Button
          size="sm"
          variant="outline"
          onClick={() => router.push("/login")}
        >
          Login
        </Button>
        <Button
          size="sm"
          variant="sprinta"
          onClick={() => router.push("/signup")}
        >
          Sign up
        </Button>
      </div>
    </nav>
  );
};
