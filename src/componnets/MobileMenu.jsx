import { useContext, useState } from "react";
import { FaAngleDown, FaBars } from "react-icons/fa";
import RenderLogos from "../components/RenderLogo";
import { langs, links } from "../constants";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { cn } from "../lib";
import { AppContext } from "../hooks/useAppContext";
import { AnimatePresence, motion } from "framer-motion";
const mainLinkClasses =
  "block w-full p-4 text-lg hover:font-semibold  flex justify-between items-center";
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const { language, setLanguage } = useContext(AppContext);
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    const html = document.querySelector("html");
    html.setAttribute("lang", lang);
    setLanguage(lang);
    setIsOpen(false);
    localStorage.setItem("lang", lang);
  };
  console.log(language);
  return (
    <>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="p-2 text-lg transition-all lg:hidden aspect-square bg-background hover:bg-primary hover:text-background"
      >
        <FaBars />
      </button>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            style={{
              backdropFilter: "blur(10px)",
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.2,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.2,
              },
            }}
            className="fixed top-0 right-0 flex w-full h-full "
          >
            <motion.div
              initial={{ x: language === "ar" ? "100%" : "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: language === "ar" ? "100%" : "-100%" }}
              className="min-w-[300px] flex flex-col"
            >
              <div className="flex items-center justify-center p-6 bg-subBackground">
                <RenderLogos size="lg" />
              </div>
              <div className="flex-grow p-4 bg-background">
                <ul className="divide-y-2 divide-border">
                  {links.map((link) => (
                    <li key={link.slug}>
                      <Link
                        onClick={() => setIsOpen(false)}
                        className={mainLinkClasses}
                      >
                        {t(link.slug)}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <ToggleMenu
                      title={t("language")}
                      body={
                        <ul className="px-2">
                          {langs.map((lang) => (
                            <li key={lang.value}>
                              <button
                                className={cn(
                                  mainLinkClasses,
                                  "p-3 border-y border-y-border"
                                )}
                                onClick={() => changeLanguage(lang.value)}
                              >
                                {lang.label}
                              </button>
                            </li>
                          ))}
                        </ul>
                      }
                    />
                  </li>
                </ul>
              </div>
            </motion.div>
            <div className="flex-1 w-full" onClick={() => setIsOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
// eslint-disable-next-line react/prop-types
const ToggleMenu = ({ title, body }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className={cn(mainLinkClasses, {
          "font-semibold border-b-border border-b-2": isOpen,
        })}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {title}
        <FaAngleDown
          className={cn("transition-all", {
            "transform rotate-180": isOpen,
          })}
        />
      </button>
      <div
        className="transition-all"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(false);
        }}
        style={{
          transformOrigin: "top",
          transform: isOpen ? "scaleY(1)" : "scaleY(0)",
        }}
      >
        {body}
      </div>
    </>
  );
};
export default MobileMenu;
