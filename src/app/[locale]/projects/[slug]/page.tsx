import Image from "next/image";
import ScrollDown from "@/components/general/scrollDown/scrollDown";

import { gql, request } from "graphql-request";

const endpoint = process.env.SANITY_GRAPHQL_ENDPOINT || "";

const fetchAllProjectQuery = gql`
  query FetchAllProject($language: String!, $title: String!) {
    allProject(where: { language: { eq: $language }, title: { eq: $title } }) {
      title
      text
      image {
        asset {
          url
        }
      }
      projectItem {
        title
        text
        image {
          asset {
            url
          }
        }
      }
    }
  }
`;

async function fetchAllProject(language: string, title: any) {
  try {
    const data: any = await request(endpoint, fetchAllProjectQuery, {
      language,
      title,
    });
    return data.allProject ?? [];
  } catch (error) {
    console.error("GraphQL fetch error:", error);
    return [];
  }
}

export default async function detailPage({ params }: { params: any }) {
  const locale = await params;

  const project = await fetchAllProject(
    locale.locale,
    decodeURIComponent(locale.slug)
  );

  return (
    <main>
      <div className=" z-10 w-full pb-8 md:-pd-0 ">
        <div className="bg-darkblue min-h-[calc(100vh-80px)] mt-[80px] md:mt-0 md:min-h-[calc(100vh-0px)] pb-12 relative">
          <div className="container mx-auto md:pt-48 px-8 pt-8 lg:px-4 ">
            <div className="md:w-2/3 w-full">
              <h1 className="lg:text-h-xl  text-h-l  text-yellow font-palanquin md:text-left text-center">
                <>{project[0].title}</>
              </h1>
              <p className="text-white text-h-xs md:text-h-sm mt-4 mb-4 md:text-left text-center font-palanquin !font-thin">
                <>{project[0].text}</>
              </p>
            </div>
          </div>

          <div className="w-full justify-end flex md:px-0 px-8 ">
            <Image
              src={project[0].image.asset.url}
              alt={`Image of ${project[0].title}`}
              className="h-full object-contain md:w-1/2 w-full md:mr-16 z-20 mt-4 rounded-3xl"
              width={1920}
              height={1080}
            />
          </div>
          <div className="hidden md:block">
            <ScrollDown />
          </div>
        </div>
      </div>

      <div className="container mx-auto md:pt-18 pt-12 px-8 lg:px-4 ">
        {project[0].projectItem.map((item: any, index: number) => (
          <div key={index} className="text-orange font-palanquin mb-8">
            {item.title && (
              <h3 className="text-h-md md:text-h-lg font-thin">{item.title}</h3>
            )}

            <div className="grid md:grid-cols-2 grid-cols-1">
              <div>
                {item.text && (
                  <p className="text-darkblue text-p-sm md:text-p-lg mt-4 mb-4 font-palanquin !font-thin">
                    {item.text}
                  </p>
                )}
              </div>
              <div className="flex items-center justify-end">
                <Image
                  src={item.image.asset.url}
                  alt={`Image of ${item.title}`}
                  className="md:w-4/5 w-full object-contain h-min rounded-3xl"
                  width={500}
                  height={300}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
