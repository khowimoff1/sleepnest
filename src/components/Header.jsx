import React from "react";
import { useTranslation } from "react-i18next";
import { FcLike } from "react-icons/fc";

const Header = () => {
  const { t, i18n } = useTranslation();
  const languages = localStorage.getItem("i18nextLng");
  const languageChange = (e) => {
    const slectedLanguage = e.target.value;
    i18n.changeLanguage(slectedLanguage);
  };

  return (
    <div className="container flex items-center justify-between px-3 lg:px-0 m-auto max-w-[85rem]">
      <a href="/">
        <img
          src="../public/Images/logo.png"
          alt="logo"
          width={150}
          height={45}
          className="lg:h-12 lg:w-44"
        />
      </a>
      <div className="flex gap-5">
        <nav className="items-center hidden gap-10 md:flex">
          <a href="/" className="text-[#00000098] text-xl hover:text-orange-400 font-medium">{t("header.Home")}</a>
          <a href="/collection" className="text-[#00000098] text-xl hover:text-orange-400 font-medium">{t("header.Collection")}</a>
          <a href="/about" className="text-[#00000098] text-xl hover:text-orange-400 font-medium">{t("header.About")}</a>
          <a href="/contact" className="text-[#00000098] text-xl hover:text-orange-400 font-medium">{t("header.Contacts")}</a>
          <a href="/wishlist" className="relative">
          <FcLike className="text-xl"/>
          <span className="absolute px-1 text-xs text-white bg-black rounded-full -right-2 -top-1">0</span>
          </a>
        </nav>
        <select
          name="lang"
          onChange={languageChange}
          value={languages}
          className="text-xl font-semibold text-[#eccece] border-2 border-[#a17f4a] py-[0.2rem] px-2 bg-[#a17f4a] rounded-lg cursor-pointer"
        >
          <option value="uz">UZ</option>
          <option value="ru">RU</option>
          <option value="eng">ENG</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
