// app/[locale]/layout.tsx
import { ReactNode } from "react";
import { setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";

// Define supported locales and default
const locales = ["en", "de"];
const defaultLocale = "en";

interface LocaleLayoutProps {
  children: ReactNode;
  params: { locale: string };
}

// Generate static params for SSG
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = params;

  // Tell next-intl which locale to use on the server
  setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="h-full">{children}</body>
    </html>
  );
}
