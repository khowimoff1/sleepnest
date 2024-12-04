import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { removeCard } from "../Action";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { t, i18n } = useTranslation();
  const productss = [
    { id: 1, name: t("collection.1"), image: "Images/winter/1.jpg" },
  ];

  const card = useSelector((state) => state.card);
  const dispatch = useDispatch();
  console.log(card.length);

  return (
    <div className="flex md:pt-28 m-auto max-w-[85rem] px-5 pt-16">
      {card.length > 0 ? (
        <div className="flex flex-wrap gap-10 pb-[190px] md:pb-[500px]">
          {card.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center group"
            >
              <div className="relative overflow-hidden rounded-xl group">
                <Link to={`/${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.name}
                    width={149}
                    height={202}
                    className="md:w-[185px] cursor-default md:h-[139px] lg:w-[250px] lg:h-[188px] transform transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
                <div
                  onClick={() => dispatch(removeCard(item.id))}
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
      ) : (
        <div className="flex justify-center w-full pt-20 pb-20">
          <img src="/Images/wish.png" alt="wish" />
        </div>
      )}
    </div>
  );
};

export default Wishlist;
