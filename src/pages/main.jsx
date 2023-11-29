import MainCard from "../components/MainCard";
import englishData from "../englishData.json";

const Main = () => {
  return (
    <div className="min-h-screen max-w-screen-md mx-auto px-8 pt-12">
      <h1 className="text-center text-4xl font-semibold font-KCC">
        정준혁 영어공부
      </h1>
      <ul className="mt-12 border-yellow-400 border-solid border-4 rounded-3xl  p-4 font-KCC2">
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
