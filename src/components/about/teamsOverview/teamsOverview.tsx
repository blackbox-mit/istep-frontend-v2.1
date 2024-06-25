import Team from "@/components/about/team/team";

import ImageMatt from "@/assets/aboutUs/teamSwiss/istep_Matt.jpg";
import ImageAdrian from "@/assets/aboutUs/teamSwiss/istep_Adrian.jpg";
import ImageAlexandra from "@/assets/aboutUs/teamSwiss/istep_Alexandra.jpg";
import ImageAline from "@/assets/aboutUs/teamSwiss/istep_Aline.jpg";
import ImageDominic from "@/assets/aboutUs/teamSwiss/istep_Dominic.jpg";
import ImageMaxim from "@/assets/aboutUs/teamSwiss/istep_Maxim.jpg";
import ImageMichelle from "@/assets/aboutUs/teamSwiss/istep_Michelle.jpg";
import ImageOlivia from "@/assets/aboutUs/teamSwiss/istep_Olivia.jpg";
import ImageYannic from "@/assets/aboutUs/teamSwiss/istep_Yannic.jpg";
import ImageSven from "@/assets/aboutUs/teamSwiss/istep_sven.jpg";
import ImageDeborah from "@/assets/aboutUs/teamSwiss/istep_deborah.jpg";

import ImageIzabela from "@/assets/aboutUs/teamLezha/istep_Izabela.jpg";

import ImageFabjan from "@/assets/aboutUs/teamElbasan/istep_Fabjan.jpg";
import ImageMigena from "@/assets/aboutUs/teamElbasan/istep_Migena.jpg";
import ImagePeki from "@/assets/aboutUs/teamElbasan/istep_Peki.jpg";

const imageTeamSwiss = [
  ImageAdrian,
  ImageAline,
  ImageDominic,
  ImageSven,
  ImageMatt,
  ImageMichelle,
  ImageOlivia,
  ImageMaxim,
  ImageAlexandra,
  ImageYannic,
  ImageDeborah,
];
const imageTeamLezha = [ImageIzabela];
const imageTeamElbasan = [ImageFabjan, ImageMigena, ImagePeki];

import { unstable_setRequestLocale } from "next-intl/server";

import { useTranslations } from "next-intl";

export default async function teamsOverview({ lng }: any) {
  unstable_setRequestLocale(lng);
  const t = useTranslations("OurTeam");
  const translation = (await import(`../../../../locales/${lng}/${lng}.json`))
    .default;

  return (
    <>
      <div className="mt-12">
        <Team
          team={translation.TeamMember.swiss}
          image={imageTeamSwiss}
          themeText="rgb(25 40 71)"
          theme="darkblue"
          color="rgb(25 40 71 / 0)"
          intro={translation.OurTeam.swissTeam}
        />
      </div>

      <div className="mt-16">
        <Team
          team={translation.TeamMember.albaniaLezha}
          image={imageTeamLezha}
          themeText="rgb(37 196 148)"
          theme="green"
          color="rgb(37 196 148 / 0)"
          intro={translation.OurTeam.lezhaTeam}
        />
      </div>
      <div className="mt-16">
        <Team
          team={translation.TeamMember.albaniaElbasan}
          image={imageTeamElbasan}
          themeText="rgb(248 179 68)"
          theme="yellow"
          color="rgb(248 179 68 / 0)"
          intro={translation.OurTeam.elbasanTeam}
        />
      </div>
    </>
  );
}
