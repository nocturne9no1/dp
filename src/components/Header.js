import { ReactComponent as Hamber } from "../assets/hamburgermenu.svg";
import { ReactComponent as Search } from "../assets/search.svg";

const Header = ({ setStep, step }) => {
  return (
    <div className="header">
      <div className="logo-row">
        <strong>H</strong>
        <div>
          <Hamber />
        </div>
      </div>
      <div className="title">영어사전</div>
      <div className="desc">ENGLISH DICTIONARY</div>
      <div className="input-wrap">
        <input type="text" placeholder="검색어 입력" />
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
  );
};

export default Header;
