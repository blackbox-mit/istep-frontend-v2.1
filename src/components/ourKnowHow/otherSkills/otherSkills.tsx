export default async function OtherSkills({ lng }: any) {
  const translation = (await import(`../../../../locales/${lng}/${lng}.json`))
    .default;

  return (
    <>
      <div>
        <div className="font-palanquin ">
          <h3 className="text-h-md md:text-h-lg text-orange">
            {translation.OurKnowHow.otherSkills.title}
          </h3>

          <p className="text-p-lg md:text-h-sm font-thin text-orange">
            {translation.OurKnowHow.otherSkills.text}
          </p>
          <div className="mt-5 text-darkblue">
            {translation.OurKnowHow.otherSkills.list.map(
              (item: string, index: number) => (
                <p className="text-p-sm md:text-p-lg font-thin " key={index}>
                  - {item}
                </p>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
