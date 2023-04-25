import { ReactComponent as IcoChat } from ".././../../assets/chat.svg";

const IconList = () => {
  return (
    <div className="news-detail-icon-row">
      <div className="left">
        <div className="like">
          &#128514; <span>197</span>
        </div>
        <div className="comment">
          <IcoChat />
          <span>319</span>
        </div>
      </div>
      <div className="right">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default IconList;
