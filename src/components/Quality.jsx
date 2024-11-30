import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import 'aos/dist/aos.css';
import AOS from 'aos'; 

const Quality = () => {
    
  const { t, i18n } = useTranslation();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  
  return (
    <div data-aos="flip-up" className="relative bg-purple-700  pt-[100px] lg:pt-10 lg:pb-20 mt-36 pb-10  rounded-3xl flex flex-col items-center justify-center text-center gap-5 lg:justify-between md:flex-row md:mt-[18rem] px-5 mb-10 shadow-xl lg:mt-28">
        <div className="absolute -top-[150px] left-0 flex justify-center items-center w-full md:-top-[300px] lg:-top-[130px]">
          <img
            src="../public/Images/quality2.png"
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
  )
}

export default Quality
