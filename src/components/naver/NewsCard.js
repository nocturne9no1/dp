import { ReactComponent as IconDots } from "../../assets/dot_menu.svg";
import { Link } from "react-router-dom";

const NewsCard = ({ newspaper, title, content, index, imgSource }) => {
  return (
    <Link
      className="naver-news-card"
      onClick={(e) => {
        if (index < 4 || index > 6) {
          e.preventDefault();
        }
      }}
      to={`/news-${index}`}
    >
      <div className="header">
        <div className="logo">
          <img src={imgSource}></img>
        </div>
        <span>{newspaper}</span>
        <div className="menu-icon">
          <IconDots />
        </div>
      </div>
      <strong className="title">{title}</strong>
      <div className="content-area">
        <p className="content">{content}</p>
        <div className="chroma"></div>
      </div>
    </Link>
  );
};

export default NewsCard;
