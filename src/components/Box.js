import { ReactComponent as Arrow } from "../assets/arrowsimple-left.svg";

const Box = ({ subject, t1, t2 }) => {
  return (
    <div className="box">
      <div className="box-header">
        <span>오늘의 {subject}</span>
        <span>
          <span>1</span>
          <span> / </span>
          <span>2</span>
        </span>
      </div>
      <div className="contents">
        <strong>{t1}</strong>
        <span>{t2}</span>
      </div>
      <div className="button">
        단어 더보기
        <Arrow />
      </div>
    </div>
  );
};

export default Box;
