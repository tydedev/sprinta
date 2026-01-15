"use client";

import React from "react";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";

interface Props {
  icon?: React.ReactNode;
  text?: string;
  provider?: "google" | "github";
}

export const ProviderBtn = ({ icon, text, provider }: Props) => {
  const signInHandler = async () => {
    try {
      await signIn(provider, { callbackUrl: `/` });
    } catch (err) {}
  };
  return (
    <Button className="flex-1" onClick={signInHandler} type="button">
      {icon}
      {text}
    </Button>
  );
};
