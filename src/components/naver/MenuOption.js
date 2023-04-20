const MenuOption = () => {
  return (
    <div className="menu-option">
      <div className="option-list">
        <span>관련도순</span>
        <span>최신순</span>
        <span>오래된순</span>
      </div>
      <div className="option">
        <div className="option-icon"></div>
        <span className="text">옵셥</span>
      </div>
    </div>
  );
};

export default MenuOption;
