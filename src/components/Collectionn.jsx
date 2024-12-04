import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import "aos/dist/aos.css";
import AOS from "aos";
import { addCard, removeCard } from "../Action";
import { Link } from "react-router-dom";

const Collectionn = () => {
  const { t, i18n } = useTranslation();

  const collection = [
    {
      id: 1,
      name: t("collection.1"),
      image: "Images/winter/1.jpg",
      category: t("category.w"),
    },
    {
      id: 2,
      name: t("collection.2"),
      image: "Images/winter/2.jpg",
      category: t("category.w"),
    },
    {
      id: 3,
      name: t("collection.3"),
      image: "Images/winter/3.jpg",
      category: t("category.w"),
    },
    {
      id: 4,
      name: t("collection.4"),
      image: "Images/winter/4.jpg",
      category: t("category.w"),
    },
    {
      id: 5,
      name: t("collection.5"),
      image: "Images/winter/5.jpg",
      category: t("category.w"),
    },
    {
      id: 6,
      name: t("collection.6"),
      image: "Images/winter/6.jpg",
      category: t("category.w"),
    },
    {
      id: 7,
      name: t("collection.7"),
      image: "Images/winter/7.jpg",
      category: t("category.w"),
    },
    {
      id: 8,
      name: t("collection.8"),
      image: "Images/winter/8.jpg",
      category: t("category.w"),
    },
    {
      id: 9,
      name: t("collection.9"),
      image: "Images/winter/9.jpg",
      category: t("category.w"),
    },
    {
      id: 10,
      name: t("collection.10"),
      image: "Images/winter/10.jpg",
      category: t("category.w"),
    },
  ];

  const dispatch = useDispatch();
  const card = useSelector((state) => state.card);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div data-aos="zoom-in-up" className="flex flex-col items-center mt-20">
      <h1 className="text-xl md:text-[35px] font-bold">
        {t("collection.Winter")}
      </h1>
      <p className="mt-4 text-base">{t("collection.Ecologically")}</p>
      <div className="grid items-center justify-center grid-cols-2 gap-10 mt-10 md:justify-between md:gap-3 md:grid-cols-3 lg:grid-cols-5">
        {collection.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center cursor-pointer group"
          >
            <div className="relative overflow-hidden rounded-xl group">
              <Link to={`/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  width={269}
                  height={202}
                  className="md:w-[185px] cursor-default md:h-[139px] lg:w-[250px] lg:h-[188px] transform transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
              <div
                onClick={() => card.some((cardItem) => cardItem.id === item.id) ? dispatch(removeCard(item.id)) : dispatch(addCard(item))}
                className="absolute z-10 p-1 text-white transition-transform duration-300 bg-gray-300 rounded-full cursor-pointer top-1 right-1 group-hover:scale-110"
              >
                {card.some((cardItem) => cardItem.id === item.id) ? (
                  <svg
                    stroke="currentColor"
                    fill="red"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
                  </svg>
                ) : (
                  <svg
                    stroke="currentColor"
                    fill="red"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path>
                  </svg>
                )}
              </div>
            </div>

            <h1 className="mt-2 font-medium text-black transition-colors duration-300 group-hover:text-red-500">
              {item.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collectionn;
