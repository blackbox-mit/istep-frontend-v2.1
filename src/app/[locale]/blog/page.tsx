import BlogPreview from "@/components/general/blogPreview/blogPreview";

import BlogOverview from "@/components/blog/blogOverview/blogOverview";

import ScrollDown from "@/components/general/scrollDown/scrollDown";

import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

interface BlogProps {
  params: {
    locale: string;
  };
}

export default function Blog({ params: { locale } }: BlogProps) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Blog");

  return (
    <main>
      <div className="min-h-[calc(100vh-80px)] bg-darkblue w-full flex items-center pb-8 md:-pd-0">
        <div className="container mx-auto md:py-24 py-12 px-8 lg:px-4 ">
          <div>
            <h1 className="lg:text-h-xl text-h-l  text-green font-palanquin md:text-left text-center">
              {t("title")}
            </h1>
            <p className="text-white md:text-h-md text-h-sm !font-thin font-palanquin md:text-left text-center">
              {t("subTitle")}
            </p>
          </div>
          <div className="mt-12">
            <BlogPreview lng={locale} />
          </div>
        </div>
        <div className="hidden md:block">
          <ScrollDown />
        </div>
      </div>

      <div className="container mx-auto md:py-24 py-12 px-8 lg:px-4">
        <BlogOverview lng={locale} />
      </div>
    </main>
  );
}
