import { useTranslation } from "react-i18next";
import SectionHeading from "./SectionHeading";

const OurServices = () => {
  const { t } = useTranslation();
  const services = [
    "real-estate-consulting",
    "real-estate-marketing",
    "sales",
    "purchase",
    "property-management",
    "facilities-management",
    "finishing",
    "design",
    "execution",
  ];

  return (
    <section className="py-12">
      <div className="container">
        <SectionHeading title={t("ourServices.title")} />
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
          {services.map((service, i) => (
            <div
              key={i}
              data-aos="fade-up"
              // data-aos-delay={i * 100}
              className="p-6 border rounded-md bg-background border-primary"
            >
              <h3 className="mt-4 mb-2 text-2xl font-semibold text-center text-secondary ">
                {t(`ourServices.${service}`)}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
