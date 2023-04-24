import { ReactComponent as IcoMic } from "../../assets/ico_mic.svg";
import { ReactComponent as IcoCrossArrow } from "../../assets/ico_cross_arrow.svg";

const HomeHeader = () => {
  return (
    <div className="naver-home-header">
      <div className="search-row">
        <span className="logo">H</span>
        <input type="text" placeholder="검색어를 입력해주세요." />
        <span className="ico_mic">
          <IcoMic />
        </span>
      </div>
      <div className="nav-row">
        <span>웹툰</span>
        <span>쇼핑</span>
        <span>홈</span>
        <span className="selected">
          <span>뉴스</span>
        </span>
        <span>연예</span>
        <span>쇼핑</span>
        <span>추천</span>
        <span>구독</span>
        <i>
          <IcoCrossArrow />
        </i>
      </div>
    </div>
  );
};

export default HomeHeader;
