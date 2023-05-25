import React from "react";
import "./sidebar.scss";
import img from "../../assets/birds.jpg";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src={img} alt="Birds" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          ipsam voluptatibus ipsa quos repellat ab sit fuga veritatis.
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATAGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Story</li>
          <li className="sidebarListItem">Sports</li>
          <li className="sidebarListItem">Movies</li>
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-facebook" />
          <i className="sidebarIcon fa-brands fa-square-twitter" />
          <i className="sidebarIcon fa-brands fa-linkedin" />
          <i className="sidebarIcon fa-brands fa-square-instagram" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
