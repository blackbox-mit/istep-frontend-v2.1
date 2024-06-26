import { unstable_setRequestLocale } from "next-intl/server";

import BlogTeaserSmall from "@/components/blog/blogTeaserSmall/blogTeaserSmall";

import image from "@/assets/blogs/01_OffToAlbania/image_1.jpg";

/*import image21 from "@/assets/blogs/02_AfterAFewDays/image_1.jpg";
import image22 from "@/assets/blogs/02_AfterAFewDays/image_2.jpg";
import image23 from "@/assets/blogs/02_AfterAFewDays/image_3.jpg";
import image24 from "@/assets/blogs/02_AfterAFewDays/image_4.jpg";
import image25 from "@/assets/blogs/02_AfterAFewDays/image_5.jpg";
import image26 from "@/assets/blogs/02_AfterAFewDays/image_6.jpg";

import image31 from "@/assets/blogs/03_Progress/image_1.jpg";
import image32 from "@/assets/blogs/03_Progress/image_2.jpg";

import image41 from "@/assets/blogs/04_ContinueToLezha/image_1.jpg";
import image42 from "@/assets/blogs/04_ContinueToLezha/image_2.jpg";
import image43 from "@/assets/blogs/04_ContinueToLezha/image_3.jpg";

import image51 from "@/assets/blogs/05_BackInAlbania/Bild_1.jpg";
import image52 from "@/assets/blogs/05_BackInAlbania/Bild_2.jpg";*/

interface projectProps {
  lng: string;
}

export default async function coursesOverview({ lng }: projectProps) {
  unstable_setRequestLocale(lng);
  const translation = (await import(`../../../../locales/${lng}/${lng}.json`))
    .default;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {translation.Blog.blogs.slice(1).map((blog: any, index: number) => (
        <BlogTeaserSmall
          key={index}
          title={blog.title}
          text={blog.text}
          image={blog.images[0]}
          moreText={blog.moreText}
          idx={index}
        />
      ))}
    </div>
  );
}
