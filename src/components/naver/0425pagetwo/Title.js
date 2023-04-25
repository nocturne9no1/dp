import SeowonLogo from "../../../assets/seowon-logo.svg";
import Giza from "../../../assets/giza-image.jpeg";
import IconList from "./IconList";

const Title = () => {
  return (
    <div className="title-wrap">
      <div className="bugagineung top">
        <div className="left">
          <div className="logo">
            <img src={SeowonLogo} alt="" />
          </div>
          <span>서원일보</span>
        </div>
        <div className="right">
          <span>PiCK</span>
          <div className="info">i</div>
        </div>
      </div>
      <div className="title">
        <p>지상파 아나운서 S씨, 촬영 중 난동 ‘충격’</p>
        <p>입력2023.05.01. 오전 9:27</p>
        <div className="author">
          <div className="logo">
            <img src={Giza} alt="" />
          </div>
          <span>한예슬 기자</span>
        </div>
      </div>
      <div className="bugagineung bottom">
        <IconList />
      </div>
    </div>
  );
};

export default Title;
