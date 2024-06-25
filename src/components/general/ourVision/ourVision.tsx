import VisionValueElement from "../visionValueElement/visionValueElement";

import ImageEnable from "@/assets/aboutUs/vision_enable.png";
import ImageRoom from "@/assets/aboutUs/vision_room.png";

interface ourVisionProps {
  ourVision: {
    title: string;
    subTitle: string;
    enable: {
      title: string;
      text: string;
    };
    createSpace: {
      title: string;
      text: string;
    };
  };
}

export default function ourVision({ ourVision }: ourVisionProps) {
  return (
    <div className="bg-yellow/20">
      <div className="container mx-auto md:py-24 py-12 px-8 lg:px-4">
        <div className="font-palanquin  text-orange">
          <h3 className="text-h-md md:text-h-lg  mb-2 md:mb-4">
            {ourVision.title}
          </h3>
          <p className="text-p-lg md:text-h-md  font-thin w-full md:w-3/5 mb-2 md:mb-4">
            {ourVision.subTitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        
          <div className="mt-4">
            <VisionValueElement
              title={ourVision.enable.title}
              image={ImageEnable}
              theme={"yellow"}
              text={ourVision.enable.text}
            />
          </div>
          <div className="mt-4">
            <VisionValueElement
              title={ourVision.createSpace.title}
              image={ImageRoom}
              theme={"yellow"}
              text={ourVision.createSpace.text}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
