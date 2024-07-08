import { useTranslation } from "react-i18next";
import { contactInfo, links, socialLinks } from "../constants";
import { Link } from "react-router-dom";
import logo from "../assets/images/footerLogo.png";
const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-2 mb-[40px] bg-subBackground lg:mb-0">
      <div className="container">
        <div className="grid gap-8 pb-2 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center justify-center col-span-2 lg:col-span-1">
            <div className="w-fit">
              <img src={logo} className={"w-32 h-32"} />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-8 h-8 transition-all border rounded-full text-primary border-primary hover:bg-primary hover:text-background"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">
              {t("footer.importantLinks")}
            </h3>
            <ul>
              {links.map((link) => (
                <li key={link.slug}>
                  <Link
                    href={link.path}
                    className="block py-2 hover:font-semibold"
                  >
                    {t(`${link.slug}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">{t("contact_us")}</h3>
            <ul className="space-y-4">
              {contactInfo.map((link) => (
                <li key={link.name} className="flex items-center gap-4">
                  <div className="p-2 rounded-md aspect-square bg-primary">
                    {link.icon}
                  </div>
                  <a
                    style={{
                      direction: link.title === "phone" ? "ltr" : "",
                    }}
                    href={link.link}
                    target="_blank"
                  >
                    {link.title === "address" ? t("address") : link.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-2 text-center border-t border-t-border">
          {t("footer.copyRight")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
