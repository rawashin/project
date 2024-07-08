import { useTranslation } from "react-i18next";
import SectionHeading from "./SectionHeading";

const OurProjects = () => {
  const { t } = useTranslation();
  return (
    <section className="py-12">
      <div className="container">
        <SectionHeading className="text-4xl" title={t("ourProjects.title")} />
        <div className="flex items-center justify-center gap-8 mt-8">
          <div className="relative flex items-center justify-center w-20 h-20 text-2xl font-semibold rounded-full text-background bg-secondary">
            {t("soon")}
            <div className="absolute w-full h-full border rounded-full border-secondary animate-ping" />
          </div>
          <div className="relative flex items-center justify-center w-20 h-20 text-2xl font-semibold rounded-full text-background bg-secondary">
            {t("soon")}
            <div className="absolute w-full h-full border rounded-full border-secondary animate-ping" />
          </div>
          <div className="relative flex items-center justify-center w-20 h-20 text-2xl font-semibold rounded-full text-background bg-secondary">
            {t("soon")}
            <div className="absolute w-full h-full border rounded-full border-secondary animate-ping" />
          </div>
        </div>
        {/* <Carousel>
          <CarouselContent>
            {Array.from({ length: 6 }).map((_, i) => (
              <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                <div
                  style={{
                    direction: t("lang") === "ar" ? "rtl" : "ltr",
                  }}
                  className="relative group aspect-[1.5/1] overflow-hidden rounded-md"
                >
                  <img
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    src="https://www.al-akaria.com/adminassets/compressed/c_c2.jpg"
                    alt=""
                  />
                  <div className="absolute z-[2] w-full bottom-0 right-0 p-8 font-semibold bg-gradient-to-t from-primary to-transparent">
                    <h3 className="mb-2 text-xl font-semibold">
                      هنا سيكون اسم المشروع
                    </h3>
                    <p>
                      هنا سيكون وصف للمشروع الذي يحتوي على تفاصيله ومعلوماته
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel> */}
      </div>
    </section>
  );
};

export default OurProjects;
