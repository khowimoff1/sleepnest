import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import axios from "axios";

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

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const validateInputs = () => {
    if (!name.trim()) {
      setError("Исмингизни киритинг.");
      return false;
    }
    if (!phone.trim()) {
      setError("Телефон рақамини киритинг.");
      return false;
    }
    return true;
  };
  const sendMessage = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setError("");

    if (!validateInputs()) return;

    const token = "7913792544:AAE2O9y-RBQ_qeBOciy9sX8_O11wcroB6Zw";
    const chat_id = 5235241793;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const messageText = `Ism: ${name}\nTelefon: ${phone}\nXabar: ${message}`;

    try {
      await axios.post(url, {
        chat_id: chat_id,
        text: messageText,
      });
      setSuccess(true);
      setName("");
      setPhone("");
      setMessage("");
    } catch (error) {
      setError("Хабар юборишда хатолик юз берди. Кейинроқ уриниб кўринг.");
      console.error("Xatolik yuz berdi", error);
    }
  };
  

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
      <form onSubmit={sendMessage}>
      <h1 className="font-bold text-[32px] mb-4 md:text-[38px]">
            {t("contact.Connection")}
          </h1>
          <input
            type="text"
            placeholder={t("contact.Your")}
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-[#e4e4e4] outline-none rounded-3xl px-4 py-3 w-full mb-5 text-xs md:text-sm md:p-5"
          />
          <input
            type="text"
            placeholder={t("contact.Your phone")}
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="bg-[#e4e4e4] outline-none rounded-3xl px-4 py-3 w-full mb-5 text-xs md:text-sm md:p-5"
          />
          {success && <div className="text-green-500">{t("xabar")}</div>}
          {error && <div className="text-red-500">{error}</div>}
          <button
            type="submit"
            className="px-8 py-3 mt-3 text-xs text-white bg-red-500 rounded-3xl md:text-sm"
          >
            {t("contact.Send")}
          </button>
      </form>
    </div>
  );
};

export default Product;
