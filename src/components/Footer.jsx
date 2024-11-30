import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="">
      <div className="container flex flex-col items-start justify-between m-auto max-w-[85rem] px-5 mt-10 lg:flex-row">
        <div className="flex flex-col lg:gap-20 md:flex-row">
          <div className="flex flex-col justify-center items-cerownter md:items-start">
            <img
              src="../public/Images/logo.png"
              alt="logo"
              className="w-64 md:w-72"
            />
            <h1 className="max-w-[400px] mt-7 text-[#908d8ddd] font-semibold">
              {t("footer.Ecological")}
            </h1>
          </div>
          <div className="flex gap-10 mt-5 lg:gap-20">
            <div>
              <h1 className="text-base font-bold">{t("footer.menu")}</h1>
              <nav className="flex flex-col mt-2">
                <a
                  href="/"
                  className="text-[#00000098] text-sm hover:text-orange-400 font-medium"
                >
                  {t("header.Home")}
                </a>
                <a
                  href="/collection"
                  className="text-[#00000098] text-sm hover:text-orange-400 font-medium"
                >
                  {t("header.Collection")}
                </a>
                <a
                  href="/about"
                  className="text-[#00000098] text-sm hover:text-orange-400 font-medium"
                >
                  {t("header.About")}
                </a>
                <a
                  href="/contact"
                  className="text-[#00000098] text-sm hover:text-orange-400 font-medium"
                >
                  {t("header.Contacts")}
                </a>
              </nav>
            </div>
            <div>
              <h1 className="text-base font-bold">{t("header.Contacts")}</h1>
              <nav className="flex flex-col mt-2">
                <p className="text-[#00000098] text-sm font-medium">
                  {t("footer.Bukhara")}
                </p>
                <a
                  href="mailto:sleepnest@gamil.com"
                  className="text-[#00000098] text-sm hover:text-orange-400 font-medium"
                >
                  {t("footer.Email")}
                </a>
                <p className="text-[#00000098] text-sm hover:text-orange-400 font-medium">
                  {t("footer.Telegram")}
                </p>
                <a
                  href="tel:+998940337212"
                  className="text-[#00000098] text-sm hover:text-orange-400 font-medium"
                >
                  +99894 033 72 12
                </a>
              </nav>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h1 className="text-base font-bold">{t("footer.Subscribe")}</h1>
          <label className="flex items-center justify-center px-2 mt-2 border-2 rounded-xl md:w-[400px]">
            <input
              type="email"
              placeholder={t("footer.Subscribe")}
              className="w-full h-12 p-3 outline-none"
            />
            <button className="px-1 text-sm font-medium text-white bg-red-600 w-36 rounded-xl h-9 hover:bg-black ">
              {t("footer.Subscribee")}
            </button>
          </label>
          <p className="text-[#00000098] text-sm hover:text-orange-400 font-medium mt-3">
            {t("footer.Select")}
          </p>
        </div>
      </div>
      <div className="py-5 mt-5 text-[8px] font-semibold text-gray-500 bg-black md:text-base">
        <div className="container m-auto max-w-[85rem] px-5 ">{t("footer.2024")}</div>
      </div>
    </div>
  );
};

export default Footer;
