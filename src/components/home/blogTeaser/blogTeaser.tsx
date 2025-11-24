import TeaserIntroText from "@/components/general/teaserIntroText/teaserIntroText";
import BlogPreview from "@/components/general/blogPreview/blogPreview";

import Link from "next/link";

export default async function BlogTeaser({ lng, blog, blogPage }: any) {
  return (
    <>
      <div className="container mx-auto md:py-24 py-12 px-8 lg:px-4 ">
        <TeaserIntroText
          title={blogPage?.title}
          subTitle={blogPage?.subtitle}
          theme={"#25926F"}
        />
        <div className="mt-8 ">
          <BlogPreview
            blog={blog}
            moreText={blogPage?.readMore}
            theme={"#25926F"}
            lng={lng}
          />
        </div>
        <div className="flex md:justify-end justify-center">
          <Link href={lng + "/blog"}>
            <button
              type="button"
              className="rounded-full font-palanquin bg-green/80 md:mt-8 mt-4 ml-0  px-10 py-2.5 text-sm font-semibold text-white focus-visible:outline hover:scale-105 transition-all duration-300"
            >
              {blogPage?.readMore}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
