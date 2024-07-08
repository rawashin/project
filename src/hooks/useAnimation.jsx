import { useContext } from "react";
import { AppContext } from "./useAppContext";

const useAnimation = () => {
  const { language } = useContext(AppContext);
  const right = language === "en" ? "fade-right" : "fade-left";
  const left = language === "en" ? "fade-left" : "fade-right";
  return { right, left };
};

export default useAnimation;
