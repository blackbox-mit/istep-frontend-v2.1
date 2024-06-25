import Image, { StaticImageData as NextImageProps } from "next/image";

interface BlogPreviewProps {
  theme: string;
  title: string;
  text: string;
  image: NextImageProps;
  moreText: string;
}

export default function blogPreview({
  title,
  text,
  moreText,
  image,
  theme,
}: BlogPreviewProps) {
  return (
    <>
      {/* todo: dynmic background color */}
      <div className="rounded-3xl bg-white">
        <div
          className={`bg-green/20 rounded-3xl font-palanquin flex flex-1 md:flex-row flex-col`}
        >
          <div className="w-full md:w-1/2 md:p-12 md:pr-0 p-6">
            <h3 className={`text-h-sm md:text-h-md text-${theme} mb-2 md:mb-4`}>
              {title}
            </h3>
            <p
              className={`text-p-sm md:text-p-lg text-darkblue font-thin w-full md:w-4/5 mb-2 md:mb-4`}
            >
              {text}
            </p>
            <div className="flex items-center cursor-pointer">
              <hr className="h-0.5 my-4 w-4 border-0 dark:bg-darkblue mr-2" />
              <p className="text-p-sm md:text-p-lg  font-thin  text-darkblue">
                {moreText}
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 order-first md:order-last">
            <Image
              src={image}
              alt="Picture of the author"
              className="h-full object-cover w-full md:rounded-tr-3xl md:rounded-br-3xl md:rounded-bl-none rounded-tr-3xl rounded-tl-3xl "

              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </div>
        </div>
      </div>
    </>
  );
}
