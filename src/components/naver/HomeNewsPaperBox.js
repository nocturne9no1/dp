import { ReactComponent as IcoDotMenu } from "../../assets/dot_menu.svg";

const HomeNewsPaperBox = ({ logo, paperName, newsList, image1, image2 }) => {
  return (
    <div className="home-news-paper-box">
      <div className="box-header">
        <div className="header-top">
          <div className="logo">{logo}</div>
          <span className="paper-name">{paperName}</span>
          <div className="menu-icon">
            <IcoDotMenu />
          </div>
        </div>
        <div className="menu">주요뉴스</div>
      </div>
      <ul className="news-list">
        {newsList.map((el, index) => (
          <li key={el + index}>{el}</li>
        ))}
      </ul>
      <div className="image-wrap">
        <div className={`image-box`}>
          {image1.src ? (
            <img src={image1.src} alt="news" />
          ) : (
            <div className="chroma" />
          )}
          <p>{image1.text}</p>
        </div>
        <div className={`image-box`}>
          {image2.src ? (
            <img src={image2.src} alt="news" />
          ) : (
            <div className="chroma" />
          )}
          <p>{image2.text}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeNewsPaperBox;
