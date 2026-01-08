import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import LangToggle from "../toggles/LocaleSwitcherSelect";

export const Navbar = () => {
  const t = useTranslations("Navbar");
  return (
    <nav className="flex gap-2 justify-end items-center h-15 px-6">
      <Button variant={"ghost"} className="cursor-pointer" size={"sm"}>
        {t("login")}
      </Button>
      <Button variant={"default"} className="cursor-pointer" size={"sm"}>
        {t("signup")}
      </Button>
      <LangToggle />
    </nav>
  );
};
