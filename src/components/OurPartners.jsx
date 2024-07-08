import { useTranslation } from "react-i18next";
import SectionHeading from "./SectionHeading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../componnets/ul/carousel";
import partner1 from "../assets/images/partners/partner1.png";
import partner2 from "../assets/images/partners/partner2.png";
import partner3 from "../assets/images/partners/partner3.png";
const OurPartners = () => {
  const { t } = useTranslation();
  const partners = [partner1, partner2, partner3];
  return (
    <section className="py-12">
      <div className="container">
        <SectionHeading title={t("ourPartners.title")} />
        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {partners.map((partner, i) => (
              <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                <div
                  data-aos="fade-up"
                  style={{
                    direction: t("lang") === "ar" ? "rtl" : "ltr",
                  }}
                  className="aspect-[1/1] overflow-hidden rounded-md"
                >
                  <img
                    className="object-cover w-full h-full"
                    src={partner}
                    alt=""
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default OurPartners;
