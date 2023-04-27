import MenuIcon from "../../assets/icons8-menu.svg";
import SearchIcon from "../../assets/icons8-search.svg";
import LogoIcon from "../../assets/image/0507/JBC_logo.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="left">
          <img src={MenuIcon} alt="" className="header-icon" />
          <img src={LogoIcon} alt="" style={{ width: 50, marginLeft: 10 }} />
        </div>
        <div className="company-name">
          <span>공지사항</span>
        </div>
        <div className="right">
          <img src={SearchIcon} alt="" className="header-icon" />
        </div>
      </div>
    </>
  );
};

export default Header;
