import Image from "next/image";
import howIs from "@/assets/aboutUs/howIs.png";

interface whoIsProps {
  whoIs: {
    title: string;
    subTitle: string;
    text: string;
  };
}

export default function howIsIstep({ whoIs }: whoIsProps) {
  return (
    <>
      <div className={`flex flex-col md:flex-row `}>
        <div className="font-palanquin w-full md:w-1/2">
          <h3 className={`text-h-md md:text-h-lg text-orange mb-2 md:mb-4`}>
            {whoIs.title}
          </h3>
          <p
            className={`text-p-lg md:text-h-md text-orange font-thin w-full md:w-4/5 mb-2 md:mb-4`}
          >
            {whoIs.subTitle}
          </p>
          <p className="w-full mb-2 text-darkblue text-p-sm md:text-p-lg">
            {whoIs.text}
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={howIs}
            alt="Picture of the author"
            width={400}
            className="p-4"
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
      </div>
    </>
  );
}
