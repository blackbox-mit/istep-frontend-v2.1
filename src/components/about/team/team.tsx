import TeamIntro from "@/components/about/teamIntro/teamIntro";
import TeamMember from "@/components/general/teamMember/teamMember";

export default function team({
  intro,
  team,
  image,
  theme,
  themeText,
  color,
}: any) {
  return (
    <>
      <TeamIntro theme={themeText} title={intro.title} text={intro.subTitle} />

      <div className="grid md:grid-cols-3 gird-cols-1 gap-8 md:mt-8 mt-4">
        {team.map((member: any, index: number) => (
          <div key={index}>
            <TeamMember
              moreText={member.moreText}
              text={member.text}
              name={member.name}
              image={image[index]}
              theme={theme}
              color={color}
            />
          </div>
        ))}
      </div>
    </>
  );
}
