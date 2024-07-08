import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { langs } from "../constants";
import { AppContext } from "../hooks/useAppContext";
import { TbLanguageKatakana } from "react-icons/tb";
const ChangeLanguage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();
  const { setLanguage } = useContext(AppContext);
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    const html = document.querySelector("html");
    html.setAttribute("lang", lang);
    setIsOpen(false);
    setLanguage(lang);
    localStorage.setItem("lang", lang);
  };
  return (
    <>
      <div className="relative">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="p-2 rounded-md bg-background hover:bg-primary hover:text-background"
        >
          <TbLanguageKatakana />{" "}
        </button>
        <div
          style={{
            transformOrigin: "top",
            transform: isOpen
              ? "scaleY(1) translateX(50%)"
              : "scaleY(0) translateX(50%)",
          }}
          className="absolute overflow-hidden transition-all rounded-md top-10 bg-background right-1/2"
        >
          <ul className="divide-y divide-border">
            {langs.map((lang) => (
              <li key={lang.value} className="block w-full">
                <button
                  onClick={() => changeLanguage(lang.value)}
                  className="block w-full px-4 py-2 text-center "
                >
                  {lang.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ChangeLanguage;
