import { Link } from "react-router-dom";

const linkList = [
  {
    title: "0514 - 나무위키",
    link: "/0514",
  },
  {
    title: "0510 - 다미디어 채용 앱",
    link: "/0510",
  },
  {
    title: "0507 - 사내 농구대회 기사",
    link: "/0507/page-2",
  },
  {
    title: "0426 - 라디오 part 2",
    link: "/0426-b",
  },
  {
    title: "0426 - 라디오 part 1",
    link: "/0426-a",
  },
  {
    title: "0425 - 네이버 홈 뉴스 + 디테일",
    link: "/0425/page-1",
  },
  {
    title: "0421 - 뉴스 리스트 + 뉴스 1, 2, 3",
    link: "/0421",
  },
  {
    title: "0529 - 풍백폰 기사",
    link: "/0529",
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
