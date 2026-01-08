import { Hero } from "@/components/marketing/Hero";
import { Navbar } from "@/components/marketing/Navbar";
import { Responsive } from "@/components/marketing/Responsive";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className="min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Responsive />
      </main>
    </div>
  );
}
