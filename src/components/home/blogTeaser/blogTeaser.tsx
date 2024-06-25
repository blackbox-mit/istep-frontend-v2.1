import TeaserIntroText from "@/components/general/teaserIntroText/teaserIntroText";
import BlogPreview from "@/components/general/blogPreview/blogPreview";
import image from "@/assets/placeholder/project.png";
import Link from "next/link";
//import { useTranslation } from "@/app/i18n";

export default async function BlogTeaser({ blog, lng }: any) {
  //const { t } = await useTranslation(lng, "blogs", { returnObjects: true });

  //const blogs = t("blogs", { returnObjects: true }) as any;

  return (
    <>
      <div className="container mx-auto md:py-24 py-12 px-8 lg:px-4 ">
        <TeaserIntroText
          title={blog.title}
          subTitle={blog.subTitle}
          text={blog.text}
          theme={"green"}
        />
        <div className="mt-8 ">
          {/* <BlogPreview
            title={blogs[0].title}
            text={blogs[0].text}
            moreText={blogs[0].moreText}
            theme={"green"}
            image={image}
          /> */}
        </div>
        <div className="flex md:justify-end justify-center">
          <Link href={lng + "/blog"}>
            <button
              type="button"
              className="rounded-full font-palanquin bg-green/80 md:mt-8 mt-4 ml-0  px-10 py-2.5 text-sm font-semibold text-white focus-visible:outline hover:scale-105 transition-all duration-300"
            >
              {/* {blog.buttonText} */}asd
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
