import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FiCheckCircle } from "react-icons/fi";
import { SlEarphonesAlt } from "react-icons/sl";
import { RiSecurePaymentLine } from "react-icons/ri";
import Collection from "../components/Collection";
import Quality from "../components/Quality";
import Autumn from "../components/Autumn";
import Quality2 from "../components/Quality2";
import Summer from "../components/Summer";
import News from "../components/News";
import 'aos/dist/aos.css';
import AOS from 'aos'; 

const Home = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="pt-20 m-auto max-w-[85rem] px-5 lg:px-0">
      <div data-aos="fade-up-right" className="relative rounded-xl animate-colorCycle pb-[50px] md:pb-[200px] lg:-[300px] mb-10">
        <img
          src="../public/images/heroImg.png"
          alt="hero"
          className="absolute w-[400px] lg:-left-40 lg:-top-20 lg:w-[1300px] md:-left-32 md:-top-12 md:w-[1000px]"
        />
        <div className="flex flex-col pt-8 font-bold pr-7 text-end">
          <h1 className="text-xl md:text-2xl z-10 text-[#7a5c33] leading-5">
            {t("hero.Environmental")}
          </h1>
          <h1 className="text-[#a17f4a] z-10 text-[35px] md:text-[45] lg:text-[55px]">
            {t("hero.Clean")}
          </h1>
          <h1 className="text-[#a17f4a] z-10 text-[45px] md:text-[55] lg:text-[95px]">
            {t("hero.Products")}
          </h1>
        </div>
      </div>
      <div data-aos="flip-left" className="grid items-center justify-between grid-cols-2 pb-10 md:grid-cols-4">
        <div className="flex items-center gap-3 lg:mt-24 lg:flex-row md:flex-col md:mt-12">
          <LiaShippingFastSolid className="md:text-[70px] text-[50px] text-red-500" />
          <div>
            <h1 className="text-base font-bold">{t("service.Free")}</h1>
            <h1 className="text-sm text-[#aaa]">
              {t("service.Free shipping")}
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-3 lg:mt-24 lg:flex-row md:flex-col md:mt-12">
          <FiCheckCircle className="md:text-[70px] text-[50px] text-red-500" />
          <div>
            <h1 className="text-base font-bold">{t("service.Return")}</h1>
            <h1 className="text-sm text-[#aaa]">{t("service.30")}</h1>
          </div>
        </div>
        <div className="flex items-center gap-3 lg:mt-24 lg:flex-row md:flex-col md:mt-12">
          <SlEarphonesAlt className="md:text-[70px] text-[50px] text-red-500" />
          <div>
            <h1 className="text-base font-bold">{t("service.24/7")}</h1>
            <h1 className="text-sm text-[#aaa]">
              {t("service.24/7 technical")}
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-3 lg:mt-24 lg:flex-row md:flex-col md:mt-12">
          <RiSecurePaymentLine className="md:text-[70px] text-[50px] text-red-500" />
          <div>
            <h1 className="text-base font-bold">{t("service.Secure")}</h1>
            <h1 className="text-sm text-[#aaa]">{t("service.All")}</h1>
          </div>
        </div>
      </div>
      <div data-aos="flip-up" className="relative bg-slate-700  pt-[100px] lg:pt-10 lg:pb-20 mt-36 pb-10  rounded-3xl flex flex-col items-center justify-center text-center gap-5 lg:justify-between md:flex-row md:mt-[18rem] px-5 mb-10 shadow-xl lg:mt-28">
        <div className="absolute -top-[150px] left-0 flex justify-center items-center w-full md:-top-[300px] lg:-top-[130px]">
          <img
            src="../public/Images/quality.png"
            alt="qualty"
            width={394}
            height={284}
            className=" md:w-[700px] md:h-[504px] lg:w-[800px] lg:h-[576px]"
          />
        </div>
        <div>
          <h1 className="text-[50px] lg:text-[90px] font-extrabold text-white">
            100%
          </h1>
          <p className="text-xl font-semibold text-white">
            {t("quality.Material")}
          </p>
        </div>
        <div className="z-10 space-y-5 md:space-y-2 md:text-start md:mt-14">
          <h1 className="text-[30px] font-semibold max-w-[400px] text-center  text-white md:text-start md:leading-7">
            {t("quality.Ecologically")}
          </h1>
          <p className="text-base max-w-[400px] text-white font-semibold md:leading-5 md:w-[320px]">
            {t("quality.has")}
          </p>
          <a href="">
            <button className="px-4 py-[6px] rounded-xl cursor-pointer bg-white mt-2">
              {t("quality.Collection")}
            </button>
          </a>
        </div>
      </div>
      <Collection/>
      <Quality/>
      <Autumn/>
      <Quality2/>
      <Summer/>
      <News/>
    </div>
  );
};

export default Home;
