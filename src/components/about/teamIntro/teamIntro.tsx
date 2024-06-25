interface TeamIntroProps {
  theme: string;
  title: string;
  text: string;

}

export default function teamIntro({ theme, title, text }: TeamIntroProps) {
  return (
    <>
      <div className={` font-palanquin`}>
        <h3 className={`text-h-md md:text-h-lg text-${theme} mb-2 md:mb-4`}>
          {title}
        </h3>
        <p
          className={`text-p-lg md:text-h-md text-${theme} font-thin w-full md:w-3/5 mb-2 md:mb-4`}
        >
          {text}
        </p>
      </div>
    </>
  );
}
