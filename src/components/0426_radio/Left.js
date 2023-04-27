import { ReactComponent as PopupIcon } from "../../assets/paste.svg";
import { ReactComponent as X } from "../../assets/x.svg";
import { ReactComponent as Volume } from "../../assets/volume.svg";
import { ReactComponent as Play } from "../../assets/play.svg";
import { ReactComponent as Home } from "../../assets/home.svg";
import { ReactComponent as Radio } from "../../assets/radio.svg";
import { ReactComponent as Team } from "../../assets/team.svg";
import { ReactComponent as Chat } from "../../assets/chat.svg";

const Left = ({ setStartChat }) => {
  return (
    <div className="radio-left">
      <div className="header">
        <div className="left">
          <span>보노보</span>
          <div className="volume-controller" />
        </div>
        <div className="right">
          <button className="popup">
            <PopupIcon />
          </button>
          <button className="under-bar-wrap">
            <div className="under-bar" />
          </button>
          <button className="close">
            <X />
          </button>
        </div>
      </div>
      <div className="middle-nav">
        <div className="contents-wrap">
          <div className="name">LIKE FM</div>
          <span className="hertz">104.25</span>
        </div>
      </div>
      <div className="img-area">
        <img src="https://picsum.photos/500/1000" alt="" />
      </div>
      <div className="info-area">
        <span className="time">15:00~17:00</span>
        <span className="title">시 읽어주는 남자</span>
        <span className="name">신재민</span>
      </div>
      <div className="controller-area">
        <div className="volume">
          <Volume />
        </div>
        <div className="play" onClick={() => setStartChat(true)}>
          <Play />
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <div className="home">
            <Home />
          </div>
          <div className="team">
            <Team />
          </div>
        </div>
        <div className="right">
          <div className="radio">
            <Radio />
          </div>
          <div className="chat">
            <Chat />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
