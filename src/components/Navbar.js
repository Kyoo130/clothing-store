import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];

  return (
    <div>
      <div>
        <div className="login-button">
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
      </div>
      <div className="nav-section">
        <img
          width={100}
          src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1999-present.jpg"
          alt="logo"
        />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu, idx) => (
            <li key={idx}>{menu}</li>
          ))}
        </ul>
        <div className="menu-search">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="제품검색" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
