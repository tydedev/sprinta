import { useTranslations } from "next-intl";
import { Logo } from "../graphic/Logo";
import { Button } from "../ui/button";

export const Hero = () => {
  const t = useTranslations("HomePage.Hero");
  return (
    <section className="w-full max-w-7xl mx-auto flex flex-col items-center h-[70vh] px-6 py-20">
      <Logo size="lg" variant="logotype" />
      <h1 className="mt-10 font-medium leading-tight tracking-tight text-4xl md:text-6xl text-center max-w-5xl">
        {t.rich("title", {
          sprinta: (t) => <span className="text-sprinta-primary">{t}</span>,
        })}
      </h1>
      <p className="mt-8 text-xl max-w-lg text-center">{t("description")}</p>
      <Button
        className="font-semibold mt-8 py-6 text-lg cursor-pointer"
        size={"lg"}
      >
        {t("button")}
      </Button>
    </section>
  );
};
