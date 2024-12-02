import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FcLike } from "react-icons/fc";
import { TbAlignLeft } from "react-icons/tb";
import { RiCloseFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { t, i18n } = useTranslation();
  const languages = localStorage.getItem("i18nextLng");
  const languageChange = (e) => {
    const slectedLanguage = e.target.value;
    i18n.changeLanguage(slectedLanguage);
  };

  const [menu, setMenu] = useState(false);
  const [closing, setClosing] = useState(false);

  const closeMenu = () => {
    setClosing(true);
    setTimeout(() => {
      setMenu(false);
      setClosing(false);
    }, 500);
  };
  const openMenu = () => {
    setMenu(true);
  };

  return (
    <div className="fixed z-50 w-full py-2 bg-white shadow-md">
      <div className="container flex items-center justify-between px-3 lg:px-0 m-auto max-w-[85rem]">
        <NavLink to="/">
          <img
            src="Images/logo.png"
            alt="logo"
            width={100}
            height={45}
            className="lg:h-12 lg:w-44"
          />
        </NavLink>
        <div className="flex items-center gap-5">
          <nav className="items-center hidden gap-10 md:flex md:gap-8">
            <NavLink
              to="/"
              className="text-[#00000098] text-xl hover:text-orange-400 font-medium"
            >
              {t("header.Home")}
            </NavLink>
            <NavLink
              to="/collection"
              className="text-[#00000098] text-xl hover:text-orange-400 font-medium"
            >
              {t("header.Collection")}
            </NavLink>
            <NavLink
              to="/about"
              className="text-[#00000098] text-xl hover:text-orange-400 font-medium"
            >
              {t("header.About")}
            </NavLink>
            <NavLink
              to="/contact"
              className="text-[#00000098] text-xl hover:text-orange-400 font-medium"
            >
              {t("header.Contacts")}
            </NavLink>
            <NavLink to="/wishlist" className="relative">
              <FcLike className="text-xl" />
              <span className="absolute px-1 text-xs text-white bg-black rounded-full -right-2 -top-1">
                0
              </span>
            </NavLink>
          </nav>
          <select
            name="lang"
            onChange={languageChange}
            value={languages}
            className="text-xl font-semibold text-[#eccece] border-2 border-[#a17f4a] md:py-[0.2rem] md:px-2 bg-[#a17f4a] rounded-lg cursor-pointer"
          >
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
            <option value="eng">ENG</option>
          </select>
          <button className="flex text-2xl md:hidden" onClick={openMenu}>
            <TbAlignLeft />
          </button>
        </div>
        {menu && (
          <div
            className={`absolute top-0 left-0 flex flex-col items-center w-full h-full min-h-screen px-3 py-3 bg-gray-100 animate-slideIn transition-all duration-500 
      ${closing ? "opacity-0 translate-x-full" : "opacity-100 translate-x-0"}`}
          >
            <div className="w-full h-10 text-end">
              <button className="text-2xl" onClick={closeMenu}>
                <RiCloseFill />
              </button>
            </div>
            <nav className="flex flex-col items-center gap-5">
              <NavLink
                to="/"
                className="text-[#09080898] text-lg font-medium"
                onClick={closeMenu}
              >
                {t("header.Home")}
              </NavLink>
              <NavLink
                to="/collection"
                className="text-[#00000098] text-lg font-medium"
                onClick={closeMenu}
              >
                {t("header.Collection")}
              </NavLink>
              <NavLink
                to="/about"
                className="text-[#00000098] text-lg font-medium"
                onClick={closeMenu}
              >
                {t("header.About")}
              </NavLink>
              <NavLink
                to="/contact"
                className="text-[#00000098] text-lg font-medium"
                onClick={closeMenu}
              >
                {t("header.Contacts")}
              </NavLink>
              <NavLink to="/wishlist" className="relative" onClick={closeMenu}>
                <FcLike className="text-xl" />
                <span className="absolute px-1 text-xs text-white bg-black rounded-full -right-2 -top-1">
                  0
                </span>
              </NavLink>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
