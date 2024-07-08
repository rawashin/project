import { useContext, useEffect, useState } from "react";
import { cn } from "../lib";
import RenderLogos from "../components/RenderLogo";
import { links } from "../constants";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ChangeLanguage from "./ChageLangage";
import { FaSearch } from "react-icons/fa";
import MobileMenu from "./MobileMenu";
import { AppContext } from "../hooks/useAppContext";
const Header = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsTop(currentScrollY === 0);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  const { t } = useTranslation();
  const { language } = useContext(AppContext);
  return (
    <header
      className={cn(
        "sticky transition-all z-10 top-0 right-0 w-full bg-subBackground font-semibold",
        {
          "bg-transparent ": isTop,
        }
      )}
    >
      <div className="container flex items-center justify-between py-2">
        <div>
          <RenderLogos />
        </div>
        <div
          className={cn(
            "items-center hidden gap-6 xl:gap-8 lg:flex text-secondary",
            {
              "text-lg xl:text-xl": language === "ar",
            }
          )}
        >
          {links.map((link) => (
            <Link key={link.slug} to={link.path} className="hover:text-primary">
              {t(link.slug)}
            </Link>
          ))}
          <FaSearch /> <ChangeLanguage />
        </div>
        <div className="items-center hidden gap-4 lg:flex">
          <span
            className={cn("gradient", {
              "text-3xl": language === "ar",
              "text-xl": language !== "ar",
            })}
          >
            {t("management")}
          </span>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
