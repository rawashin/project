import { useTranslation } from "react-i18next";
import SectionHeading from "./SectionHeading";
import { cn } from "../lib";

const OurManagement = () => {
  const { t } = useTranslation();
  const services = [
    "development-and-strategic-planning-management",
    "investment-management",
    "marketing-and-sales-management",
    "legal-affairs-management",
    "financial-management",
    "support-services-management",
  ];
  return (
    <section className="py-12">
      <div className="container">
        <SectionHeading title={t("ourManagement.title")} />
        <div className="space-y-2">
          {services.map((service, i) => (
            <div key={i} className={cn("flex items-center gap-2")}>
              <h3 className="mt-4 mb-2 text-2xl font-semibold text-secondary">
                📌 {t(`ourManagement.${service}`)}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurManagement;
