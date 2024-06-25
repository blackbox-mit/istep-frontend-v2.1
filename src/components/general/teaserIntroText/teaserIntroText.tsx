interface TeaserIntroTextProps {
  theme: string;
  title: string;
  text: string;
  subTitle: string;
}

export default function teaserIntroText({
  title,
  subTitle,
  text,
  theme,
}: TeaserIntroTextProps) {
  return (
    <div className="font-palanquin">
      <h3 className={`text-h-md md:text-h-lg text-${theme} mb-2 md:mb-4`}>
        {title}
      </h3>
      <p
        className={`text-p-lg md:text-h-md text-${theme} font-thin w-full md:w-3/5 mb-2 md:mb-4`}
      >
        {subTitle}
      </p>
      <p className="w-full md:w-1/2 mb-2 text-darkblue">{text}</p>
    </div>
  );
}
