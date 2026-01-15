"use client";

import { Button } from "@/components/ui/button";
import { NavBar } from "@/components/ui/global/NavBar";
import { signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main>
        <h1 className="text-3xl">Hello {session?.user?.email}</h1>
        <Button onClick={() => signOut()}>Logout</Button>
      </main>
    </div>
  );
}
