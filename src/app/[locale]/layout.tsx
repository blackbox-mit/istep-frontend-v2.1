import "../globals.css";
import type { Metadata } from "next";

import { ReactNode } from "react";

import { Suspense } from "react";
import Navbar from "../../components/general/navbar/navbar";
import Footer from "../../components/general/footer/footer";

import { gql, request } from "graphql-request";

export const metadata: Metadata = {
  title: "iSTEP",
  description:
    "der Verein iSTEP fokusiert sich auf IT Kurse, welche in bedürftigen Ländern mit Jugendliche durchgeführt werden.",
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "de" }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<any>;
}>) {
  const endpoint = process.env.SANITY_GRAPHQL_ENDPOINT || "";

  const fetchNavigationQuery = gql`
    query FetchHeaderFooter($language: String!) {
      allHeader(where: { language: { eq: $language } }) {
        logo {
          asset {
            url
          }
        }
        donationText

        navigation {
          link
          text
        }
      }
    }
  `;
  const fetchFooterQuery = gql`
    query FetchFooter($language: String!) {
      allFooter(where: { language: { eq: $language } }) {
        logo {
          asset {
            url
          }
        }
        title
        donationText
        donateButton
        legalNotice
        copyrightText
        email
        statutes
        istep
      }
    }
  `;

  async function fetchNavigation(language: string) {
    try {
      const data: any = await request(endpoint, fetchNavigationQuery, {
        language,
      });
      return data.allHeader ?? [];
    } catch (error) {
      console.error("GraphQL fetch error:", error);
      return { header: [], footer: [] };
    }
  }

  async function fetchFooter(language: string) {
    try {
      const data: any = await request(endpoint, fetchFooterQuery, {
        language,
      });
      return data.allFooter ?? [];
    } catch (error) {
      console.error("GraphQL fetch error:", error);
      return { header: [], footer: [] };
    }
  }
  const lang: any = await params;

  const navigation = await fetchNavigation(lang.locale);
  const footer = await fetchFooter(lang.locale);

  return (
    <html lang={lang.locale}>
      <body className="h-full">
        <Suspense>
          <Navbar navigation={navigation} locale={lang.locale} />
        </Suspense>
        {children}
        <Suspense>
          <Footer footer={footer} locale={lang.locale} />
        </Suspense>
      </body>
    </html>
  );
}
