import React from "react";
import { useTranslation } from "react-i18next";

const News = () => {
  const { t, i18n } = useTranslation();

  const news = [
    {
      id: 1,
      title: t("news.How"),
      content: t("news.When"),
      date: "10/05/2024",
      by: t("news.by"),
      image:"Images/news1.png"
    },
    {
      id: 2,
      title: t("news.How2"),
      content: t("news.Interesting"),
      date: "10/05/2024",
      by: t("news.by"),
      image:"Images/news2.png"
    },
    {
      id: 3,
      title: t("news.Ways"),
      content: t("news.What"),
      date: "10/05/2024",
      by: t("news.by"),
      image:"Images/news3.png"
    },
  ];

  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-xl md:text-[35px] font-bold">{t("news.News")}</h1>
      <p className="mt-4 text-base font-semibold text-gray-400">
        {t("news.Ecologically")}
      </p>
      <div className="flex flex-col justify-between mt-5 md:flex-row md:gap-5 lg:gap-10">
        {news.map(item => (
            <div key={item.id}>
                <img src={item.image} alt="news" className="w-full rounded-2xl"/>
                <div className="flex items-center gap-2 mt-1 mb-3">
                    <h1 className="font-semibold">{item.date}</h1>
                    <p className="text-xs text-[#616060] ">{item.by}</p>
                </div>
                <h1 className="text-lg font-bold md:text-base md:max-w-[450px] mb-2">{item.title}</h1>
                <p className="text-[#5b5a5a] lg:max-w-[450px] text-base md:text-sm mb-5">{item.content}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default News;
