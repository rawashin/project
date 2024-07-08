import { useTranslation } from "react-i18next";
import SectionHeading from "./SectionHeading";
import image from "../assets/images/lego.jpg";
import useAnimation from "../hooks/useAnimation";
const cols = [
  {
    name: "vision",
  },
  {
    name: "mission",
  },
  { name: "message" },
  { name: "chance" },
  { name: "trust" },
  { name: "responsibility" },
];
const AboutUSections = () => {
  const { t } = useTranslation();
  const { right, left } = useAnimation();
  return (
    <>
      <section className="py-12">
        <div className="container grid gap-8 lg:grid-cols-2 ">
          <div className="order-2 lg:order-1" data-aos={right}>
            <SectionHeading isStart={true} title={t("about_us_heading")} />

            <p
              dangerouslySetInnerHTML={{ __html: t("about_us_paragraph") }}
            ></p>
          </div>
          <div data-aos={left} className="order-1 p-4 lg:order-2">
            <img
              src={image}
              className="aspect-[1.7/1] rounded-md w-full"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="container">
          <SectionHeading title={t("about_rawashin")} />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
            {cols.map((col) => (
              <div key={col} data-aos={"fade-up"} className="w-full p-4">
                <h3 className="mb-4 text-2xl text-secondary">
                  {t(col.name)}
                  <div className="w-12 h-[1px] mt-2 bg-secondary" />
                </h3>
                <p>{t(`${col.name}_paragraph`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUSections;
