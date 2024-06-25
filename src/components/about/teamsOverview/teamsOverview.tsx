import Team from "@/components/about/team/team";

export default function teamsOverview({
  teamSwiss,
  teamElbasan,
  teamLezha,
  teamSwissImages,
  teamElbasanImages,
  teamLezhaImages,
  introSwiss,
  introElbasan,
  introLezha,
}: any) {
  return (
    <>
      <div className="mt-12">
        <Team
          team={teamSwiss}
          image={teamSwissImages}
          theme="darkblue"
          color="rgb(25 40 71 / 0)"
          intro={introSwiss}
        />
      </div>

      <div className="mt-16">
        <Team
          team={teamLezha}
          image={teamLezhaImages}
          theme="green"
          color="rgb(37 196 148 / 0)"
          intro={introLezha}
        />
      </div>
      <div className="mt-16">
        <Team
          team={teamElbasan}
          image={teamElbasanImages}
          theme="yellow"
          color="rgb(248 179 68 / 0)"
          intro={introElbasan}
        />
      </div>
    </>
  );
}
