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
      {
        card.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center cursor-pointer group"
          >
            <h1 className="mt-2 font-medium text-black transition-colors duration-300 group-hover:text-red-500">
              {item.name}
            </h1>
          </div>
        ))
      }
    </div>
  );
};

export default Wishlist;
