import React from "react";
import { useTranslation } from "react-i18next";
import { RiMessage2Line } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex flex-col md:pt-28 m-auto max-w-[85rem] px-5 pt-16">
      <div className="flex flex-col w-full lg:flex-row lg:gap-10">
        <form className="w-full lg:w-auto">
          <h1 className="font-bold text-[32px] mb-4 md:text-[38px]">
            {t("contact.Connection")}
          </h1>
          <input
            type="email"
            placeholder={t("contact.Your")}
            className="bg-[#e4e4e4] outline-none rounded-3xl px-4 py-3 w-full mb-5 text-xs md:text-sm md:p-5"
          />
          <input
            type="text"
            placeholder={t("contact.Your phone")}
            className="bg-[#e4e4e4] outline-none rounded-3xl px-4 py-3 w-full mb-5 text-xs md:text-sm md:p-5"
          />
          <textarea
            placeholder={t("contact.Please")}
            className="bg-[#e4e4e4] outline-none rounded-3xl px-4 py-3 w-full h-24 mb-5 text-xs md:text-sm md:p-5"
          />
          <button className="px-8 py-3 text-xs text-white bg-red-500 rounded-3xl md:text-sm">
            {t("contact.Send")}
          </button>
        </form>
        <div className="mt-10 border-2 border-gray-500 h-[300px] lg:w-1/2 lg:h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3067.65283644043!2d64.4573972754485!3d39.74744849610298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDQ0JzUwLjgiTiA2NMKwMjcnMzUuOSJF!5e0!3m2!1sen!2s!4v1733048729666!5m2!1sen!2s"
            style={{ border: 2 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-4 mt-20">
        <div className="flex items-center gap-2">
          <RiMessage2Line className="md:text-[40px] text-[30px] text-red-500" />
          <a
            href="mailto:sleepnest@email.com"
            className="text-lg font-semibold hover:cursor-pointer hover:text-red-600"
          >
            Email:sleepnest@gmail.com
          </a>
        </div>
        <div className="flex gap-2">
          <FiPhoneCall className="md:text-[30px] text-[25px] text-red-500" />
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+998940337212"
              className="text-lg font-semibold hover:cursor-pointer hover:text-red-600"
            >
              Tel:+998940337212
            </a>
            <a
              href="tel:+998917777368"
              className="text-lg font-semibold hover:cursor-pointer hover:text-red-600"
            >
              +998917777368
            </a>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <IoLocationOutline className="md:text-[40px] text-[30px] text-red-500" />
          <a
            href="https://www.google.com/maps/place/39%C2%B044'50.8%22N+64%C2%B027'35.9%22E/@39.7474485,64.4573973,17z/data=!3m1!4b1!4m4!3m3!8m2!3d39.7474444!4d64.4599722?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
            className="text-lg font-semibold hover:cursor-pointer hover:text-red-600"
          >
            {t("contact.Bukhara")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
