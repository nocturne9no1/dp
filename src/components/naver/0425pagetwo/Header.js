import BackArrow from "../../../assets/back-arrow.svg";
import Check from ".././../../assets/check.svg";

const Header = () => {
  return (
    <div className="header-wrap">
      <div className="top">
        <div className="icon-wrap left">
          <img src={BackArrow} alt="" />
        </div>
        <div className="company-name">
          <span>서원일보</span>
        </div>
        <div className="icon-wrap right">
          <img src={Check} alt="" />
          <span>구독중</span>
        </div>
      </div>
      <div className="bottom">
        <span>뉴스</span>
        <span>숏폼</span>
        <span>정치</span>
        <span>경제</span>
        <div className="selected">
          <span>사회</span>
          <div></div>
        </div>
        <span>생활</span>
        <span>세계</span>
        <span>IT</span>
      </div>
    </div>
  );
};

export default Header;
