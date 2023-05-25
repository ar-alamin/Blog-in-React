import React from "react";
import "./settings.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import prof from "../../assets/profile.jpg";

function Setting() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingTitle">
          <span className="settingUpdateTitle">Update Your Account</span>
          <span className="settingDeleteTitle">Delete Your Account</span>
        </div>

        <form className="settingForm">
          <label>Profile Picture</label>
          <div className="settignPP">
            <img src={prof} alt="" />
            <label htmlFor="fileInput">
              <i className="settingPPIcon far fa-user-circle" />
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="username" />

          <label>Email</label>
          <input type="email" placeholder="exmple@gmail.com" />

          <label>Password</label>
          <input type="Password" />
          <button className="settingSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Setting;
