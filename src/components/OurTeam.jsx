import { useTranslation } from "react-i18next";
import SectionHeading from "./SectionHeading";
import abdelSalam from "../assets/images/team/abdelSalam.jpg";
import khalid from "../assets/images/team/khalid.jpg";
import walid from "../assets/images/team/walid.png";
import mohamed from "../assets/images/team/mohamed.jpg";
import randy from "../assets/images/team/randy.jpg";

const OurTeam = () => {
  const { t } = useTranslation();
  const gridClasses = "flex justify-center items-stretch center my-8 flex-wrap";
  return (
    <>
      <section className="container py-12 ">
        <SectionHeading title={t("ourTeam.title")} />
        <div className={gridClasses}>
          <MemberCard image={mohamed} name="mohamed" />
        </div>
        <div className={gridClasses}>
          <MemberCard image={""} name="hasanFadl" />
        </div>
        <div className={gridClasses}>
          <MemberCard image={randy} name="randy" />
          <MemberCard image={""} name="" />
        </div>
        <div className={gridClasses}>
          <MemberCard image={walid} name="walid" />
          <MemberCard image={khalid} name="khalid" />
          <MemberCard image={abdelSalam} name="abdelSalam" />
          <MemberCard image={""} name="khalidWael" />
        </div>
      </section>
    </>
  );
};
const MemberCard = ({ image, name }) => {
  const { t } = useTranslation();

  return (
    <div className="px-4 md:basis-1/3 sm:basis-1/2 lg:basis-1/4">
      <div className="flex flex-col items-center h-full p-4 border rounded-md border-secondary">
        <div className="w-full rounded-md aspect-[1/1.4] overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full landingImage"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 animate-pulse" />
          )}
        </div>
        <h3 className="mt-4 text-xl font-semibold text-center text-secondary">
          {name ? t("ourTeam." + name) : "--------"}
        </h3>
      </div>
    </div>
  );
};
export default OurTeam;
