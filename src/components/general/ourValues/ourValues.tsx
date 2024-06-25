import VisionValueElement from "../visionValueElement/visionValueElement";
import titleImage from "@/assets/home/titleImage.png";
import engagementImage from '@/assets/aboutUs/werte-engagement.png'
import individualitaeteImage from '@/assets/aboutUs/werte-individualitaet.png'
import nachhaltigImage from '@/assets/aboutUs/werte-nachhaltig.png'


interface ourValuesProps {
  ourValues: {
    title: string;
    subTitle: string;
    appreciation: {
      title: string;
      text: string;
    };
    individualSupport: {
      title: string;
      text: string;
    };
    growingTogether: {
      title: string;
      text: string;
    };
  };
}

export default function ourValues({ourValues}:ourValuesProps) {
  return (
    <div>
      <div className="container mx-auto md:py-24 py-12 px-8 lg:px-4">
        <div className="font-palanquin  text-orange">
          <h3 className="text-h-md md:text-h-lg  mb-2 md:mb-4">Unsere Werte</h3>
          <p className="text-p-lg md:text-h-md  font-thin w-full md:w-3/5 mb-2 md:mb-4">
            Wir arbeiten direkt vor Ort in Albanienan diesen zwei Standorten.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
          <div className="mt-4">
            <VisionValueElement
              title={"Wertschätzung"}
              image={engagementImage}
              theme={"darkblue"}
              text={
                "Wir begegnen anderen Menschen mit Freundlichkeit, Respekt und Offenheit. Egal woher eine Person kommt, woran sie glaubt oder wo sie im Leben steht, wir sind für alle Menschen offen, wertschätzend und empathisch."
              }
            />
          </div>
          <div className="mt-4">
            <VisionValueElement
              title={"Individuell fördern"}
              image={individualitaeteImage}
              theme={"darkblue"}
              text={
                "Bei unseren Aktionen steht der Mensch mit seinen eigenen Erfahrungen im Zentrum. Wir ermöglichen unseren Teilnehmenden eine individuelle Betreuung und achten darauf, sie ihrem Niveau entsprechend zu fördern."
              }
            />
          </div>
          <div className="mt-4">
            <VisionValueElement
              title={"Gemeinsam wachsen"}
              image={nachhaltigImage}
              theme={"darkblue"}
              text={
                "Unsere Leidenschaft ist es, Menschen neue Perspektiven zu zeigen, ihnen ein Gefühl der Zuversicht zu vermitteln und sie zu motivieren, einen nächsten Schritt zu wagen. Durch den wertvollen Austausch lernen und wachsen wir mit unseren Teilnehmenden mit."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
