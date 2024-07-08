import { useTranslation } from "react-i18next";
import SectionHeading from "./SectionHeading";
import image from "../assets/images/founder.png";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import name from "../assets/images/name.png";
import useAnimation from "../hooks/useAnimation";
const LeaderTalk = () => {
  const { t } = useTranslation();
  const { right, left } = useAnimation();

  return (
    <section className="py-12">
      <div className="container grid items-center lg:gap-8 lg:grid-cols-2">
        <div data-aos={right} className="p-4 mb-8">
          <img
            src={image}
            className="md:w-full md:h-[500px]  object-cover rounded-md"
            alt=""
          />
        </div>
        <div data-aos={left}>
          <SectionHeading isStart={true} title={t("leaderTalk.title")} />
          <div className="relative px-8">
            <p className="text-justify">
              <FaQuoteRight className="right-0 inline px-2 top-4 text-secondary" />
              <span
                dangerouslySetInnerHTML={{
                  __html: t("leaderTalk.description"),
                }}
              ></span>

              <FaQuoteLeft className="left-0 inline px-2 bottom-4 text-secondary" />
            </p>
          </div>
          <img src={name} alt="name" className="h-32 ms-auto" />
        </div>
      </div>
    </section>
  );
};

export default LeaderTalk;
