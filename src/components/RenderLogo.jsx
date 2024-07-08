/* eslint-disable react/prop-types */
import { useContext } from "react";
import arabicLogo from "../assets/images/arLogo.png";
import englishLogo from "../assets/images/enLogo.png";
import { cn } from "../lib";
import { AppContext } from "../hooks/useAppContext";
const RenderLogos = ({ size = "md" }) => {
  let classes = "";
  if (size === "sm") {
    classes = "w-8 h-8";
  } else if (size === "md") {
    classes = "w-28 h-28";
  } else if (size === "lg") {
    classes = "w-32 h-32";
  }
  const { language } = useContext(AppContext);
  return (
    <img
      src={language === "ar" ? arabicLogo : englishLogo}
      className={cn(classes)}
    />
  );
};

export default RenderLogos;
