/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const AppContext = createContext(null);

// eslint-disable-next-line react/prop-types
const html = document.querySelector("html");

export const AppContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const { i18n } = useTranslation();
  useEffect(() => {
    const storedLanguage = localStorage.getItem("lang");
    if (storedLanguage) {
      setLanguage(storedLanguage);
      i18n.changeLanguage(storedLanguage);
      html.setAttribute("lang", storedLanguage);
      console.log(storedLanguage);
    } else {
      setLanguage("en");
      i18n.changeLanguage("en");
      html.setAttribute("lang", "en");
      localStorage.setItem("lang", "en");
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
