import { Link } from "react-router-dom";

const linkList = [
  {
    title: "0421 - 뉴스 리스트 + 뉴스 1, 2, 3",
    link: "/0421",
  },
  {
    title: "0425 - 네이버 홈 뉴스 + 디테일",
    link: "/0425/page-1",
  },
];

const Main = () => {
  return (
    <div className="main-wrap">
      <h1>소품 리스트</h1>
      <ul>
        {linkList.map((el, index) => (
          <li key={el.title + index}>
            <Link to={el.link}>{el.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
