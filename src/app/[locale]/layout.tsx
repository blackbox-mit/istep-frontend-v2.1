import "../globals.css";
import type { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";

import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { Suspense } from "react";
import Navbar from "../../components/general/navbar/navbar";
import Footer from "../../components/general/footer/footer";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export const metadata: Metadata = {
  title: "iSTEP",
  description:
    "der Verein iSTEP fokusiert sich auf IT Kurse, welche in bedürftigen Ländern mit Jugendliche durchgeführt werden.",
};

//function to generate the routes for all the locales
export async function generateStaticParams() {
  return ["en", "de"].map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  unstable_setRequestLocale(locale);
  return (
    <html lang={locale}>
      <body className="h-full">
        <NextIntlClientProvider locale={locale}>
          <Suspense>
            <Navbar />
          </Suspense>
          {children}

          <Suspense>
            <Footer />
          </Suspense>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
