import React from 'react'
import { useTranslation } from 'react-i18next';

const Summer = () => {
    const { t, i18n } = useTranslation();

    const collection = [
      { id: 23, name: t("summer.3"), image: "Images/summer/3.jpg" },
      { id: 22, name: t("summer.2"), image: "Images/summer/2.jpg" },
      { id: 24, name: t("summer.4"), image: "Images/summer/4.jpg" },
      { id: 21, name: t("summer.1"), image: "Images/summer/1.jpg" },
      { id: 25, name: t("summer.5"), image: "Images/summer/5.jpg" },
      { id: 26, name: t("summer.6"), image: "Images/summer/6.jpg" },
      { id: 27, name: t("summer.7"), image: "Images/summer/7.jpg" },
      { id: 28, name: t("summer.8"), image: "Images/summer/8.jpg" },
      { id: 29, name: t("summer.9"), image: "Images/summer/9.jpg" },
      { id: 30, name: t("summer.10"), image: "Images/summer/10.jpg" },
    ];
  
    return (
      <div className="flex flex-col items-center mt-20">
        <h1 className="text-xl md:text-[35px] font-bold">
          {t("summer.Summer")}
        </h1>
        <p className="mt-4 text-base">{t("summer.Ecologically")}</p>
        <div className="grid items-center justify-center grid-cols-2 gap-10 mt-10 md:justify-between md:gap-3 md:grid-cols-3 lg:grid-cols-5">
          {collection.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center cursor-pointer group"
            >
              <div className="relative overflow-hidden rounded-xl group">
                <img
                  src={item.image}
                  alt={item.name}
                  width={269}
                  height={202}
                  className="md:w-[185px] md:h-[139px] lg:w-[250px] lg:h-[188px] transform transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute z-10 p-1 text-white transition-transform duration-300 bg-gray-300 rounded-full top-1 right-1 group-hover:scale-110">
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
}

export default Summer
