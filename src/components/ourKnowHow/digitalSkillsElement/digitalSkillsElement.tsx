export default function DigitalSkillsElement({ title, elements, idx }: any) {
  const textColorOptions = ["#24926F", "#F8B343", "#E07200"];

  const textColorStyle = {
    color: textColorOptions[idx % textColorOptions.length],
  };
  return (
    <>
      <div className="font-palanquin text-darkblue ">
        <h3 className="text-h-sm md:text-h-md ">{title}</h3>
        {elements.map((item: string, index: number) => (
          <p className="text-p-sm md:text-p-lg" key={index}>
            - {item}
          </p>
        ))}
      </div>
    </>
  );
}
