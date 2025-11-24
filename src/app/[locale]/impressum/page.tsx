import { gql, request } from "graphql-request";
import { getLocale } from "next-intl/server";

const endpoint = process.env.SANITY_GRAPHQL_ENDPOINT || "";

const fetchImpressumQuery = gql`
  query FetchImpressum($language: String!) {
    allImpressum(where: { language: { eq: $language } }) {
      title
      companyName
      address
      plz
      disclaimer {
        title
        text
      }
    }
  }
`;

async function fetchAllImpressum(language: string) {
  try {
    const data: any = await request(endpoint, fetchImpressumQuery, {
      language,
    });
    return data.allImpressum ?? [];
  } catch (error) {
    console.error("GraphQL fetch error:", error);
    return [];
  }
}

export default async function Impressum({}) {
  const locale = await getLocale();
  const impressum = await fetchAllImpressum(locale);

  console.log("impressum", impressum);
  return (
    <main className="container mx-auto md:py-24 py-12 px-8 lg:px-4">
      <div className="mt-4 font-palanquin text-darkblue">
        <h3 className="text-h-md md:text-h-lg ">{impressum[0].title}</h3>
        <div className="md:mt-8 mt-4 font-palanquin text-darkblue">
          <p className="md:text-h-sm text-h-xs">iSTEP</p>
          <p className="md:text-h-xs text-p-lg !font-thin mt-2">
            Parkettstrasse 36
          </p>
          <p className="md:text-h-xs text-p-lg !font-thin mb-4">
            3432 Lützelflüh
          </p>
          <a
            className="md:text-h-xs text-p-lg !font-thin underline"
            href="mailto:info@istep.ch"
          >
            info@istep.ch
          </a>
        </div>
        {impressum?.[0]?.disclaimer?.map((d: any, i: number) => (
          <div key={i} className="md:mt-16 mt-8">
            {d.title && <h5 className="text-h-sm md:text-h-md">{d.title}</h5>}
            {d.text && <p className="md:text-p-lg text-p-xs">{d.text}</p>}
          </div>
        ))}
      </div>
    </main>
  );
}
