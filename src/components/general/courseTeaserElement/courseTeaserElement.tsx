import Image, { StaticImageData as NextImageProps } from "next/image";
import Link from "next/link";

interface CoursesTeaserElementProps {
  bgColor: string;
  title: string;
  text: string;
  image: NextImageProps;
  imagePosition: string;
  lng: string;
  link: string;
}

export default function CoursesTeaserElement({
  bgColor,
  image,
  imagePosition,
  title,
  text,
  lng,
  link,
}: CoursesTeaserElementProps) {
  const backgroundColor = bgColor;
  return (
    <>
      <Link
        href={`${lng + link}`}
        style={{ backgroundColor }}
        className="rounded-3xl w-full "
      >
        <div
          className={` rounded-3xl md:p-8 p-6 font-palanquin`}
          style={{ backgroundColor }}
        >
          <div className={`${imagePosition} flex`}>
            <Image
              src={image}
              alt="Picture of the author"
              className="object-contain md:w-96 sm:w-48 w-28 aspect-square rounded-3xl max-h-56"
            />
          </div>

          <h5 className="text-h-xs md:text-h-md text-bold text-darkblue md:mt-8 mt-4 mb-2 ">
            {title}
          </h5>
          <div className="flex items-center cursor-pointer">
            <hr className="h-0.5 my-4 w-4 border-0 dark:bg-darkblue mr-2" />
            <p className="text-p-sm md:text-p-lg text-darkblue">{text}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
