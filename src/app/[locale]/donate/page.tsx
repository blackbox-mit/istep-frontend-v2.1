import Image from "next/image";
import titleImage from "@/assets/aboutUs/titleImage.png";

import CoursesTeaserElement from "@/components/general/courseTeaserElement/courseTeaserElement";
import DonateQR from "@/components/donate/donteQR/donateQR";
import DonateTwint from "@/components/donate/donateTwint/donateTwint";
import DonateRaiseNow from "@/components/donate/donateRaiseNow/donateRaiseNow";
import DonateBankConnection from "@/components/donate/donateBankConnection/donateBankConnection";

import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

interface CoursesProps {
  params: {
    locale: string;
  };
}

import ScrollDown from "@/components/general/scrollDown/scrollDown";
import { gql, request } from "graphql-request";
import { getLocale } from "next-intl/server";

const endpoint = process.env.SANITY_GRAPHQL_ENDPOINT || "";

const fetchDonateQuery = gql`
  query FetchDonatePage($language: String!) {
    allDonatePage(where: { language: { eq: $language } }) {
      titlePreview {
        title
        subtitle
        image {
          asset {
            url
          }
        }
      }
      titleQR
      imageQR {
        asset {
          url
        }
      }
      titleBank
      textBankRaw
      titleCreditCard
      textCreditCardRaw
    }
  }
`;

async function fetchDonatePage(language: string) {
  try {
    const data: any = await request(endpoint, fetchDonateQuery, {
      language,
    });
    return data.allDonatePage ?? [];
  } catch (error) {
    console.error("GraphQL fetch error:", error);
    return [];
  }
}
export default async function Donate() {
  const locale = await getLocale();
  const donateData = await fetchDonatePage(locale);
  console.log("donateData", donateData);

  return (
    <main className=" z-10">
      <div className="min-h-[calc(100vh-80px)] mt-[80px] md:mt-0 md:min-h-[calc(100vh-0px)] bg-darkblue w-full flex items-center pb-8 md:-pd-0">
        <div className="container mx-auto md:py-24 py-12 px-8 lg:px-4 ">
          <h1 className="lg:text-h-xl  text-h-l  text-yellow font-palanquin md:text-left text-center">
            {donateData[0].titlePreview.title}
          </h1>

          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/5 w-full">
              <h4 className="text-white text-h-sm md:text-h-md mt-4 mb-4  md:text-left text-center font-palanquin !font-thin"></h4>
            </div>
            <div className="lg:w-3/5 w-full flex justify-center">
              <Image
                src={donateData[0].titlePreview.image.asset.url}
                alt="Picture of the author"
                className="h-96 object-contain "
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto md:py-24 py-12 px-8 lg:px-4">
        <div className="mt-4">
          <DonateQR
            titleQR={donateData[0].titleQR}
            imageQR={donateData[0].imageQR}
          />
        </div>
        <div className="mt-4">
          <DonateBankConnection
            titleBank={donateData[0].titleBank}
            textBankRaw={donateData[0].textBankRaw}
          />
        </div>

        <div className="mt-4">
          <DonateRaiseNow
            titleCreditCard={donateData[0].titleCreditCard}
            textCreditCardRaw={donateData[0].textCreditCardRaw}
          />
        </div>
      </div>
    </main>
  );
}
