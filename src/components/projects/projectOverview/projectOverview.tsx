import ProjectTeaser from "@/components/projects/projectTeaser/projectTeaser";

import { unstable_setRequestLocale } from "next-intl/server";

interface projectProps {
  lng: string;
}

export default async function projectOverview({ lng }: projectProps) {
  unstable_setRequestLocale(lng);
  const translation = (await import(`../../../../locales/${lng}/${lng}.json`))
    .default;

  return (
    <div className="container mx-auto md:py-24 py-12 px-8 lg:px-4">
      {translation.Projects.map((project: any, index: number) => (
        <div key={index} className="mb-12">
          <ProjectTeaser project={project} idx={index} />
        </div>
      ))}
    </div>
  );
}
