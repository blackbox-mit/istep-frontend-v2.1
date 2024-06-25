import { unstable_setRequestLocale } from "next-intl/server";

import BlogTeaserSmall from "@/components/blog/blogTeaserSmall/blogTeaserSmall";
import image01 from "@/assets/blogs/01_OffToAlbania/image_1.jpg";

import image21 from "@/assets/blogs/02_AfterAFewDays/image_1.jpg";
import image22 from "@/assets/blogs/02_AfterAFewDays/image_2.jpg";
import image23 from "@/assets/blogs/02_AfterAFewDays/image_3.jpg";
import image24 from "@/assets/blogs/02_AfterAFewDays/image_4.jpg";
import image25 from "@/assets/blogs/02_AfterAFewDays/image_5.jpg";
import image26 from "@/assets/blogs/02_AfterAFewDays/image_6.jpg";

import image31 from "@/assets/blogs/03_Progress/image_1.jpg";
import image32 from "@/assets/blogs/03_Progress/image_2.jpg";

interface projectProps {
  lng: string;
}

export default async function coursesOverview({ lng }: projectProps) {
  const images = [
    [image31, image32],
    [image21, image22, image23, image24, image25, image26],
    [image01],
  ];

  unstable_setRequestLocale(lng);
  const translation = (await import(`../../../../locales/${lng}/${lng}.json`))
    .default;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {images.map((image, index: number) => (
        <BlogTeaserSmall
          key={index}
          //@ts-ignore
          title={translation.Blog.blogs[index + 1].title}
          //@ts-ignore
          text={translation.Blog.blogs[index + 1].text}
          image={image[0]}
          //@ts-ignore
          moreText={translation.Blog.blogs[index + 1].moreText}
          idx={index}
        />
      ))}
    </div>
  );
}
