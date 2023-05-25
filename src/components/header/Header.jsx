import React from "react";
import blogImg from "../../assets/nature.jpg";
import "./header.scss";

function Header() {
  return (
    <div className="header">
      <div className="headerTitle">
        <div className="headerTitleSm">React & Node</div>
        <div className="headerTitleLg">Blog</div>
      </div>

      <img src={blogImg} alt="blog img" className="headerImg" />
    </div>
  );
}

export default Header;
