import { useTranslation } from "react-i18next";
import { contactInfo } from "../constants";
import SectionHeading from "./SectionHeading";
import useAnimation from "../hooks/useAnimation";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const ContactUsSection = () => {
  const { t } = useTranslation();
  const { right, left } = useAnimation();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm("service_s8imfyf", "template_5tlb1yj", form.current, {
        publicKey: "IxUyxsYIWZGyzxnK9",
      })
      .then(
        () => {
          setMessage("success");
        },
        (error) => {
          setMessage("error");
          console.log(error);
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section className="py-12">
      <div className="container grid md:grid-cols-2">
        <div data-aos={right}>
          <SectionHeading isStart={true} title={t("contactUs.title")} />
          <p></p>
          <ul className="space-y-4">
            {contactInfo.map((info, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-xl">{info.icon}</span>
                <a
                  href={info.link}
                  target="_blank"
                  style={{
                    direction: info.title === "phone" ? "ltr" : "",
                  }}
                >
                  {info.title === "address" ? t("address") : info.value}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-4 "
          data-aos={left}
        >
          <input
            className="block w-full px-6 py-4 border-2 rounded-md shadow-md focus:outline-none focus:border-secondary bg-subBackground border-subBackground "
            type="text"
            name="name"
            placeholder={t("contactUs.name")}
            required
          />
          <input
            className="block w-full px-6 py-4 border-2 rounded-md shadow-md focus:outline-none focus:border-secondary bg-subBackground border-subBackground "
            type="email"
            name="email"
            placeholder={t("contactUs.email")}
            required
          />
          <input
            className="block w-full px-6 py-4 border-2 rounded-md shadow-md focus:outline-none focus:border-secondary bg-subBackground border-subBackground "
            type="text"
            name="subject"
            placeholder={t("contactUs.subject")}
            required
          />
          <textarea
            className="block w-full px-6 py-4 border-2 rounded-md shadow-md focus:outline-none focus:border-secondary bg-subBackground border-subBackground "
            placeholder={t("contactUs.message")}
            name="message"
            required
          ></textarea>
          {message === "success" && (
            <p className="text-green-500">{t("contactUs.success")}</p>
          )}
          {message === "error" && (
            <p className="text-red-500">{t("contactUs.error")}</p>
          )}
          <button className="px-8 py-3 text-lg font-semibold rounded-md bg-primary">
            {t("contactUs.send")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUsSection;
