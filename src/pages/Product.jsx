import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const Product = () => {
  const { t, i18n } = useTranslation();
  const products = [
    { id: 1, name: t("collection.1"), image: "Images/winter/1.jpg", category: t("category.w") },
    { id: 2, name: t("collection.2"), image: "Images/winter/2.jpg", category: t("category.w") },
    { id: 3, name: t("collection.3"), image: "Images/winter/3.jpg", category: t("category.w") },
    { id: 4, name: t("collection.4"), image: "Images/winter/4.jpg", category: t("category.w") },
    { id: 5, name: t("collection.5"), image: "Images/winter/5.jpg", category: t("category.w") },
    { id: 6, name: t("collection.6"), image: "Images/winter/6.jpg", category: t("category.w") },
    { id: 7, name: t("collection.7"), image: "Images/winter/7.jpg", category: t("category.w") },
    { id: 8, name: t("collection.8"), image: "Images/winter/8.jpg", category: t("category.w") },
    { id: 9, name: t("collection.9"), image: "Images/winter/9.jpg", category: t("category.w") },
    { id: 10, name: t("collection.10"), image: "Images/winter/10.jpg", category: t("category.w") },
    { id: 11, name: t("autumn.1"), image: "Images/autm/1.jpg",category: t("category.a") },
    { id: 12, name: t("autumn.2"), image: "Images/autm/2.jpg",category: t("category.a") },
    { id: 13, name: t("autumn.3"), image: "Images/autm/3.jpg",category: t("category.a") },
    { id: 14, name: t("autumn.4"), image: "Images/autm/4.jpg",category: t("category.a") },
    { id: 15, name: t("autumn.5"), image: "Images/autm/5.jpg",category: t("category.a") },
    { id: 16, name: t("autumn.6"), image: "Images/autm/6.jpg",category: t("category.a") },
    { id: 17, name: t("autumn.7"), image: "Images/autm/7.jpg",category: t("category.a") },
    { id: 18, name: t("autumn.8"), image: "Images/autm/8.jpg",category: t("category.a") },
    { id: 19, name: t("autumn.9"), image: "Images/autm/9.jpg",category: t("category.a") },
    { id: 20, name: t("autumn.10"), image: "Images/autm/10.jpg",category: t("category.s") },
    { id: 23, name: t("summer.3"), image: "Images/summer/3.jpg",category: t("category.s") },
    { id: 22, name: t("summer.2"), image: "Images/summer/2.jpg",category: t("category.s") },
    { id: 24, name: t("summer.4"), image: "Images/summer/4.jpg",category: t("category.s") },
    { id: 21, name: t("summer.1"), image: "Images/summer/1.jpg",category: t("category.s") },
    { id: 25, name: t("summer.5"), image: "Images/summer/5.jpg",category: t("category.s") },
    { id: 26, name: t("summer.6"), image: "Images/summer/6.jpg",category: t("category.s") },
    { id: 27, name: t("summer.7"), image: "Images/summer/7.jpg",category: t("category.s") },
    { id: 28, name: t("summer.8"), image: "Images/summer/8.jpg",category: t("category.s") },
    { id: 29, name: t("summer.9"), image: "Images/summer/9.jpg",category: t("category.s") },
    { id: 30, name: t("summer.10"), image: "Images/summer/10.jpg",category: t("category.s") },
  ];
  const params = useParams();
  const filtered = products.filter((item) => item?.id == params?.id);
  

  return (
    <div className="flex flex-col md:pt-28 m-auto max-w-[85rem] px-5 pt-16 mb-20">
      <div className="flex flex-col gap-8 md:items-center md:flex-row">
        <img
          src={filtered[0].image}
          alt="wish"
          className="w-full rounded-3xl md:w-1/2"
        />
        <div className="md:w-1/2">
          <h1 className="font-bold text-[1.5em]">{t("wish.Circles")}</h1>
          <table className="w-full mt-5">
            <tbody>
              <tr className="text-[12px] font-medium border md:text-[16px] leading-5">
                <td className="py-3 pl-5 border-r">{t("wish.Material")}</td>
                <td className="pl-5">{t("wish.100%")}</td>
              </tr>
              <tr className="text-[12px] font-medium border md:text-[16px] leading-5">
                <td className="py-3 pl-5 border-r">{t("wish.Pillowcase")}</td>
                <td className="pl-5">{t("wish.50x70")}</td>
              </tr>
              <tr className="text-[12px] font-medium border md:text-[16px] leading-5">
                <td className="py-3 pl-5 border-r">{t("wish.Bedding")}</td>
                <td className="pl-5">{t("wish.260×280")}</td>
              </tr>
              <tr className="text-[12px] font-medium border md:text-[16px] leading-5">
                <td className="py-3 pl-5 border-r">{t("wish.Bed")}</td>
                <td className="pl-5">{t("wish.160x220")}</td>
              </tr>
              <tr className="text-[12px] font-medium border md:text-[16px] leading-5">
                <td className="py-3 pl-5 border-r">{t("wish.Size")}</td>
                <td className="pl-5">{t("wish.Custom")}</td>
              </tr>
              <tr className="text-[12px] font-medium border md:text-[16px] leading-5">
                <td className="py-3 pl-5 border-r">{t("wish.Manufacturer")}</td>
                <td className="pl-5">{t("wish.Environmental")}</td>
              </tr>
            </tbody>
          </table>
          <h1 className="mt-4 text-sm font-medium text-red-500 md:text-base">
            <span>{t("wish.Category")}</span> {filtered[0].category}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Product;
