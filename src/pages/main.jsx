import MainCard from "../components/MainCard";
import englishData from "../englishData.json";

import { useEffect } from "react";

const Main = () => {
  useEffect(() => {
    const font = new FontFace(
      "KCCChassam",
      "url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/KCCChassam.woff2') format('woff2')"
    );
    font.load().then(() => {
      document.fonts.add(font);
    });
  }, []);

  return (
    <div className="min-h-screen max-w-screen-md mx-auto px-8 pt-12">
      <h1
        className="text-center text-4xl font-semibold"
        style={{ fontFamily: "KCCChassam" }}
      >
        정준혁 영어공부
      </h1>
      <ul className="mt-12 border-yellow-400 border-solid border-4 rounded-3xl  p-4">
        {englishData.map((v, i) => (
          <MainCard key={i} title={v.title} day={v.day} />
        ))}
      </ul>
      <div className="text-sm text-center mt-[30px] my-4 text-gray-400">
        Copyright 2023. 정준혁 All pictures cannot be copied without permission.
      </div>
    </div>
  );
};

export default Main;
