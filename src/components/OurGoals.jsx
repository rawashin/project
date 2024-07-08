import { useTranslation } from "react-i18next";
import SectionHeading from "./SectionHeading";
import image from "../assets/images/ourGoals.jpg";
import useAnimation from "../hooks/useAnimation";
const OurGoals = () => {
  const { t } = useTranslation();
  const { right, left } = useAnimation();
  // text
  return (
    <section className="py-12">
      <div className="container grid items-center lg:gap-8 lg:grid-cols-2">
        <div data-aos={right}>
          <SectionHeading isStart={true} title={t("ourGoals.title")} />
          <div className="grid gap-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <div className="flex items-center gap-4 group" key={index}>
                <div className="flex items-center justify-center w-16 h-16 transition-all duration-500 border rounded-full group-hover:bg-secondary group-hover:border-secondary border-text ">
                  <span className="flex items-center justify-center w-8 h-8 font-bold transition-all duration-500 border rounded-full group-hover:border-secondary border-text group-hover:bg-secondary group-hover:text-background">
                    {index + 1}
                  </span>
                </div>
                <p className="mt-4 text-3xl">
                  {t(`ourGoals.goal${index + 1}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div data-aos={left} className="p-4">
          <img
            src={image}
            className="aspect-[1.7/1] rounded-md w-full"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default OurGoals;
