import { Link } from "react-router-dom";

const MainCard = ({ title, day }) => {
  return (
    <Link to={`${day}`}>
      {/* 해당 day를 클릭하면 해당 day의 페이지로 이동 */}
      <li className="text-xl mt-6 my-6 text-center">
        <span className="font-semibold mr-2 text-emerald-600">Day {day}</span>
        <span>{title}</span>
      </li>
    </Link>
  );
};

export default MainCard;
