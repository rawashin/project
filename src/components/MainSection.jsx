import { useTranslation } from "react-i18next";
import SectionHeading from "./SectionHeading";
import image from "../assets/images/mainSection.png";
import useAnimation from "../hooks/useAnimation";
const MainSection = () => {
  const { t } = useTranslation();
  const { right, left } = useAnimation();
  return (
    <section className="py-12">
      <div className="container grid items-center gap-8 lg:grid-cols-2">
        <div className="order-2 lg:order-1" data-aos={right}>
          <SectionHeading isStart={true} title={t("mainSection.title")} />
          <p
            className="text-justify"
            dangerouslySetInnerHTML={{ __html: t("mainSection.description") }}
          ></p>
        </div>
        <div data-aos={left} className="order-1 lg:order-2">
          <img src={image} alt="" />
        </div>
      </div>
    </section>
  );
};

export default MainSection;
