"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useState, startTransition } from "react";

import { Locales } from "@/lib/locales";
import LoadingState from "../LoadingState";

type LocaleCode = keyof typeof Locales;
interface Props {
  ghost?: boolean;
}

const LangToggle = ({ ghost }: Props) => {
  const l = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  function onSelectChange(nextLocale: LocaleCode) {
    if (nextLocale === locale) return;

    setIsLoading(true);

    startTransition(() => {
      // Rimpiazziamo il segment [locale] nella route corrente
      const segments = pathname.split("/");
      segments[1] = nextLocale; // perché "/it/about" → ["", "it", "about"]

      router.push(segments.join("/"));
    });
  }

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          disabled={isLoading}
          variant={ghost ? "ghost" : "outline"}
          size="icon"
        >
          {isLoading ? <LoadingState size="sm" /> : locale.toUpperCase()}
          <span className="sr-only">{l("label")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(Locales).map(([code, { name }]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => onSelectChange(code as LocaleCode)}
            className="cursor-pointer"
          >
            {name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LangToggle;
