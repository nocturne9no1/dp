import Giza from "../../../assets/giza-image-need-change.jpeg";
import IconList from "./IconList";

const Title = () => {
  return (
    <div className="title-wrap">
      <div className="bugagineung top">
        <div className="left" />
        <div className="right">
          <span>PiCK</span>
          <div className="info">i</div>
        </div>
      </div>
      <div className="title">
        <p>아나운서 S씨, 충격의 녹화 현장</p>
        <p>입력 2023-04-23 오전 09:43</p>
        <div className="author">
          <div className="logo">
            <img src={Giza} alt="" />
          </div>
          <span>임민호 기자</span>
        </div>
      </div>
      <div className="bugagineung bottom">
        <IconList />
      </div>
    </div>
  );
};

export default Title;
