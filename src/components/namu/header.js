import { ReactComponent as Chat } from "../../assets/chat.svg";
import { ReactComponent as Cube } from "../../assets/ico_cube.svg";
import { ReactComponent as CrossArrow } from "../../assets/ico_cross_arrow.svg";
import { ReactComponent as Search } from "../../assets/search.svg";
import { ReactComponent as Arrow } from "../../assets/back-arrow.svg";
import { ReactComponent as Person } from "../../assets/ico_person.svg";

const Header = () => {
  return (
    <div className="namu-header-wrap">
      <div className="namu-header-inner">
        <div className="left">
          <strong className="logo">식물위키</strong>
          <span>
            <i className="fa-solid fa-compass"></i>최근 변경
          </span>
          <span>
            <Chat />
            최근 토론
          </span>
          <span>
            <Cube />
            특수 기능
          </span>
        </div>
        <div className="right">
          <div className="input-area">
            <span className="double-arrow">
              <CrossArrow />
            </span>
            <input type="text" placeholder="Search" />
            <span className="search">
              <Search />
            </span>
            <span className="arrow-right">
              <Arrow />
            </span>
          </div>
          <span className="person">
            <Person />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
