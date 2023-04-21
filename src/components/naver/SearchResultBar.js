import { ReactComponent as IconMic } from "../../assets/ico_mic.svg";
import { ReactComponent as IconDots } from "../../assets/dot_menu.svg";

const SearchResultBar = () => {
  return (
    <div className="search-bar-wrap">
      <div className="input-row">
        <div className="logo">H</div>
        <div className="input-area">
          <input type="text" value="JBC 방송사고" />
          <div className="x-button"></div>
        </div>
        <div className="mic-button">
          <IconMic />
        </div>
      </div>
      <div className="menu-row">
        <span>통합</span>
        <span>뉴스</span>
        <span>이미지</span>
        <span>어학사전</span>
        <span>동영상</span>
        <div className="more-btn">
          <IconDots />
        </div>
      </div>
    </div>
  );
};

export default SearchResultBar;
