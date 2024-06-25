// app/page.tsx

import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function HomePage({ params: { locale } }: any) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("Index");

  return <div className="text-white">{t("title")}</div>;
}
