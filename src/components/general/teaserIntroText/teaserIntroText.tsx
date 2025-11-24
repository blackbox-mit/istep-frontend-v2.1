interface TeaserIntroTextProps {
  theme: string;
  title: string;

  subTitle: string;
}

export default function teaserIntroText({
  title,
  subTitle,

  theme,
}: TeaserIntroTextProps) {
  return (
    <div className="font-palanquin">
      <h3
        className={`text-h-md md:text-h-lg  mb-2 md:mb-4`}
        style={{ color: theme }}
      >
        {title}
      </h3>
      <p
        className={`text-p-lg md:text-h-md w-full md:w-3/5 mb-2 md:mb-4`}
        style={{ color: theme }}
      >
        {subTitle}
      </p>
    </div>
  );
}
