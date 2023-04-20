import { ReactComponent as Hamber } from "../assets/hamburgermenu.svg";
import { ReactComponent as Search } from "../assets/search.svg";
import { ReactComponent as Arrow } from "../assets/arrowsimple-left.svg";

const Header2 = ({ setStep, step }) => {
  return (
    <>
      <div className="header two">
        <div className="logo-row">
          <strong>
            H<div className="title">영어사전</div>
            <span>
              | 영한사전 <Arrow />
            </span>
          </strong>
          <div>
            <Hamber />
          </div>
        </div>
        <div className="input-wrap">
          <input type="text" placeholder="검색어 입력" value="switch" />
          <div className="x-button"></div>
          <button className="icon" onClick={() => setStep(1)}>
            <Search />
          </button>
        </div>
        {step === 0 && (
          <ul>
            <li>
              <div></div>
            </li>
            <li>
              <div></div>
            </li>
            <li>
              <div></div>
            </li>
            <li>
              <div></div>
            </li>
            <li>
              <div></div>
            </li>
          </ul>
        )}
      </div>
      <div className="list">
        <div>전체</div>
        <div>단어ㆍ숙어</div>
        <div>뜻풀이</div>
        <div>예문</div>
        <div>유의어</div>
        <div>영영사전</div>
      </div>
    </>
  );
};

export default Header2;
