import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { removeCard } from "../Action";

const Wishlist = () => {
  const { t, i18n } = useTranslation();
  const productss = [
    { id: 1, name: t("collection.1"), image: "Images/winter/1.jpg" },
  ];

  const card = useSelector(state => state.card);
  const dispatch = useDispatch()
  
  return (
    // <div className="flex flex-col md:pt-28 m-auto max-w-[85rem] px-5 pt-16">
    //   <div className="flex flex-col gap-8 md:items-center md:flex-row">
    //     <img
    //       src={productss[0].image}
    //       alt="wish"
    //       className="w-full rounded-3xl md:w-1/2"
    //     />
    //     <div className="md:w-1/2">
    //       <h1 className="font-bold text-[1.5em]">{t("wish.Circles")}</h1>
    //       <table className="w-full mt-5">
    //         <tbody>
    //           <tr className="text-[12px] font-medium border md:text-[16px] leading-5">
    //             <td className="py-3 pl-5 border-r">{t("wish.Material")}</td>
    //             <td className="pl-5">{t("wish.100%")}</td>
    //           </tr>
    //           <tr className="text-[12px] font-medium border md:text-[16px] leading-5">
    //             <td className="py-3 pl-5 border-r">{t("wish.Pillowcase")}</td>
    //             <td className="pl-5">{t("wish.50x70")}</td>
    //           </tr>
    //           <tr className="text-[12px] font-medium border md:text-[16px] leading-5">
    //             <td className="py-3 pl-5 border-r">{t("wish.Bedding")}</td>
    //             <td className="pl-5">{t("wish.260×280")}</td>
    //           </tr>
    //           <tr className="text-[12px] font-medium border md:text-[16px] leading-5">
    //             <td className="py-3 pl-5 border-r">{t("wish.Bed")}</td>
    //             <td className="pl-5">{t("wish.160x220")}</td>
    //           </tr>
    //           <tr className="text-[12px] font-medium border md:text-[16px] leading-5">
    //             <td className="py-3 pl-5 border-r">{t("wish.Size")}</td>
    //             <td className="pl-5">{t("wish.Custom")}</td>
    //           </tr>
    //           <tr className="text-[12px] font-medium border md:text-[16px] leading-5">
    //             <td className="py-3 pl-5 border-r">{t("wish.Manufacturer")}</td>
    //             <td className="pl-5">{t("wish.Environmental")}</td>
    //           </tr>
    //         </tbody>
    //       </table>
    //       <h1 className="mt-4 text-sm font-medium text-red-500 md:text-base">
    //         {t("wish.Category")}
    //       </h1>
    //     </div>
    //   </div>
    // </div>
    <div className="flex flex-wrap md:pt-28 m-auto max-w-[85rem] px-5 pt-16">
      {card.map((item) => (
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
              <div onClick={()=>dispatch(removeCard(item.id))} className="absolute z-10 p-1 text-white transition-transform duration-300 bg-gray-300 rounded-full top-1 right-1 group-hover:scale-110">
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
  );
};

export default Wishlist;
