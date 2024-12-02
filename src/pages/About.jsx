import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t, i18n } = useTranslation();
  return <div className="flex md:pt-28 m-auto max-w-[85rem] px-5 pt-16 flex-wrap-reverse lg:flex-nowrap items-center justify-center">
    <div className="lg:w-[50%] lg:pr-14">
      <h1 className="text-base font-bold md:text-4xl">{t("about.Ecologically")}</h1>
      <ul className="space-y-3 text-[#696969] mt-4 font-semibold text-xs md:text-base lg:font-medium">
        <li className="leading-5">{t("about.Our")}</li>
        <li className="leading-5">{t("about.Our company")}</li>
        <li className="leading-5">{t("about.The")}</li>
        <li className="leading-5">{t("about.Manufacturing")}</li>
        <li className="leading-5">{t("about.Using")}</li>
        <li className="leading-5">{t("about.Also")}</li>
        <li className="leading-5">{t("about.Every")}</li>
        <li className="leading-5">{t("about.More")}</li>
        <li className="leading-5">{t("about.In")}</li>
        <li className="leading-5">{t("about.According")}</li>
        <li className="leading-5">{t("about.Our")}</li>
      </ul>
    </div>
    <div>
      <img src="/Images/aboutImg.png" alt="about" className="w-full mb-12 shadow-xl mt-7 rounded-2xl shadow-black" />
    </div>
  </div>;
};

export default About;
