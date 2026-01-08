import {
  Calendar,
  ChartPie,
  Edit,
  ListCheck,
  ListChecks,
  TrendingUp,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const Responsive = () => {
  const t = useTranslations("HomePage.Responsive");
  return (
    <section className="w-full max-w-6xl mx-auto items-center py-20">
      <h2 className="font-medium text-4xl leading-tight tracking-tight text-center mb-10">
        {t.rich("title", {
          sprinta: (t) => <span className="text-sprinta-primary">{t}</span>,
        })}
      </h2>
      <div className="flex flex-col md:flex-row justify-between w-full py-10 px-6">
        <div className="bg-slate-900 rounded-2xl w-full flex-1 flex items-center justify-center py-10">
          <Image
            src="/images/device_mockup.png"
            alt="Logo"
            width={250}
            height={250}
            priority
          />
        </div>
        <div className="flex-1 md:px-10 text-muted-foreground flex flex-col justify-center">
          <h3 className="text-2xl font-medium text-primary">{t("subtitle")}</h3>
          <p className="mt-5">{t("description")}</p>
          <ul className="mt-8 max-w-lg text-lg space-y-8">
            <li className="flex gap-2 items-center">
              <ListChecks className="text-sprinta-primary" />
              <span>{t("list.1")}</span>
            </li>
            <li className="flex gap-2 items-center">
              <Edit className="text-sprinta-primary" />
              <span>{t("list.2")}</span>
            </li>
            <li className="flex gap-2 items-center">
              <Calendar className="text-sprinta-primary" />
              <span>{t("list.3")}</span>
            </li>
            <li className="flex gap-2 items-center">
              <TrendingUp className="text-sprinta-primary" />
              <span>{t("list.4")}</span>
            </li>
            <li className="flex gap-2 items-center">
              <ChartPie className="text-sprinta-primary" />
              <span>{t("list.5")}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
