import Image from "next/image";
import whatWeDo_1 from "../../../assets/home/whatWeDo_1.png";
import whatWeDo_2 from "../../../assets/home/whatWeDo_2.png";

interface whatWeDoProps {
  whatWeDo: {
    title: string;
    subTitle: string;
    text: string;
    text2: string;
  };
}

export default function wahtWeDo({ whatWeDo }:whatWeDoProps) {
  return (
    <>
      <div className="text-orange font-palanquin ">
        <h3 className="text-h-md md:text-h-lg ">{whatWeDo.title}</h3>
        <p className="text-p-lg md:text-h-md font-thin">{whatWeDo.subTitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-palanquin mt-4 md:mt-4">
        <p className="text-p-sm md:text-p-lg text-darkblue">{whatWeDo.text}</p>
        <Image
          src={whatWeDo_1}
          alt="Picture of the author"
          height={400}
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-palanquin mt-4 md:mt-4">
        <Image
          src={whatWeDo_2}
          alt="Picture of the author"
          height={400}
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
        <p className="text-p-sm md:text-p-lg order-first md:order-last text-darkblue">
          {whatWeDo.text2}
        </p>
      </div>
    </>
  );
}
