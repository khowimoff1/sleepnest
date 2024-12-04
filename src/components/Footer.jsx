import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="">
      <div className="container flex flex-col items-start justify-between m-auto max-w-[85rem] px-5 mt-10 lg:flex-row">
        <div className="flex flex-col w-full lg:gap-20 md:flex-row">
          <div className="flex flex-col items-center justify-center md:items-start">
            <img
              src="Images/logo.png"
              alt="logo"
              className="w-64 md:w-72"
            />
            <h1 className="max-w-[400px] mt-7 text-[#908d8ddd] font-semibold">
              {t("footer.Ecological")}
            </h1>
          </div>
          <div className="flex items-center justify-center gap-10 mt-5 lg:gap-20 md:justify-normal md:items-start">
            <div>
              <h1 className="text-base font-bold">{t("footer.menu")}</h1>
              <nav className="flex flex-col mt-2">
                <NavLink
                  to="/"
                  className="text-[#00000098] text-sm hover:text-orange-400 font-medium"
                >
                  {t("header.Home")}
                </NavLink>
                <NavLink
                  to="/collection"
                  className="text-[#00000098] text-sm hover:text-orange-400 font-medium"
                >
                  {t("header.Collection")}
                </NavLink>
                <NavLink
                  to="/about"
                  className="text-[#00000098] text-sm hover:text-orange-400 font-medium"
                >
                  {t("header.About")}
                </NavLink>
                <NavLink
                  to="/contact"
                  className="text-[#00000098] text-sm hover:text-orange-400 font-medium"
                >
                  {t("header.Contacts")}
                </NavLink>
              </nav>
            </div>
            <div>
              <h1 className="text-base font-bold">{t("header.Contacts")}</h1>
              <nav className="flex flex-col mt-2">
                <p className="text-[#00000098] text-sm font-medium">
                  {t("footer.Bukhara")}
                </p>
                <NavLink
                  to="mailto:sleepnest@gamil.com"
                  className="text-[#00000098] text-sm hover:text-orange-400 font-medium"
                >
                  {t("footer.Email")}
                </NavLink>
                <p className="text-[#00000098] text-sm hover:text-orange-400 font-medium">
                  {t("footer.Telegram")}
                </p>
                <NavLink
                  to="tel:+998940337212"
                  className="text-[#00000098] text-sm hover:text-orange-400 font-medium"
                >
                  +99894 033 72 12
                </NavLink>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full mt-5 md:w-auto md:items-start">
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
