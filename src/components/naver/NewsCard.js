import { ReactComponent as IconDots } from "../../assets/dot_menu.svg";
import { useNavigate, NavLink } from "react-router-dom";

const NewsCard = ({ newspaper, title, content, index, imgSource, time }) => {
  let navigate = useNavigate();
  return (
    <NavLink
      className={`naver-news-card ${
        sessionStorage.getItem(index) !== null && "visited"
      }`}
      onClick={(e) => {
        console.log(sessionStorage.getItem(index));
        if (index < 4 || index > 6) {
          e.preventDefault();
        } else {
          // eslint-disable-next-line no-restricted-globals
          // location.href = `/news-${index}`;
          const a = document.querySelector("body");
          a.style.opacity = 0.3;
          sessionStorage.setItem(index, index);
          setTimeout(
            () => {
              navigate(`/news-${index}`);
              a.style.opacity = 1;
            },

            300
          );
        }
      }}

      // to={`/news-${index}`}
    >
      <div className="header">
        <div className="logo">
          <img src={imgSource}></img>
        </div>
        <span>{newspaper}</span>
        <span>{time}</span>
        <div className="menu-icon">
          <IconDots />
        </div>
      </div>
      <strong className="title">{title}</strong>
      <div className="content-area">
        <p className="content">{content}</p>
        <div className="chroma"></div>
      </div>
    </NavLink>
  );
};

export default NewsCard;
