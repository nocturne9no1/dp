import BackArrow from "../../../assets/back-arrow.svg";
import Check from ".././../../assets/check.svg";

const Header = () => {
  return (
    <div className="header-wrap">
      <div className="top" style={{ backgroundColor: "#122E85" }}>
        <div className="icon-wrap left">
          <img src={BackArrow} alt="" />
        </div>
        <div className="company-name">
          <span>삼진일보</span>
        </div>
        <div className="icon-wrap right">
          <img src={Check} alt="" />
          <span>구독중</span>
        </div>
      </div>
      <div className="bottom" style={{ backgroundColor: "#122E85" }}>
        <span>사설/칼럼</span>
        <span>정치</span>
        <span>사회</span>
        <div className="selected">
          <span>연예</span>
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
