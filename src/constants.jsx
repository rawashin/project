import { FaPhone } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
export const links = [
  { slug: "main", path: "/" },
  { slug: "about_rawashin", path: "/about" },
  { slug: "our_services", path: "/services" },
  { slug: "contact_us", path: "/contact" },
  { slug: "our_team", path: "/team" },
  { slug: "our_news", path: "/news" },
];
export const langs = [
  { value: "ar", label: "العربية" },
  { value: "en", label: "English" },
  { value: "fr", label: "Français" },
];
export const contactInfo = [
  {
    title: "phone",
    value: "+201100333981",
    link: "tel:+201100333981",
    paragraph: "phone_paragraph",
    icon: <FaPhone />,
  },
  {
    title: "email",
    value: "gm@rawashin.co",
    link: "mailto:gm@rawashin.co",
    paragraph: "email_paragraph",
    icon: <MdOutlineMailOutline />,
  },
  {
    title: "address",
    value: "address",
    paragraph: "address_paragraph",
    link: "mailto:gm@rawashin.co",
    icon: <IoLocationOutline />,
  },
];
export const socialLinks = [
  { name: "facebook", link: "https://facebook.com", icon: <FaFacebookF /> },
  { name: "twitter", link: "https://twitter.com", icon: <FaXTwitter /> },
  { name: "instagram", link: "https://instagram.com", icon: <FaInstagram /> },
  { name: "linkedin", link: "https://linkedin.com", icon: <FaLinkedinIn /> },
  { name: "youtube", link: "https://youtube.com", icon: <FaYoutube /> },
];
