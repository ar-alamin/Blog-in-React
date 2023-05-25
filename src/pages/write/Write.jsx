import React from "react";
import "./write.scss";
import writeImg from "../../assets/bird.jpg";

function Write() {
  return (
    <div className="write">
      <img src={writeImg} alt="" className="writeImg" />
      <form action="" className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon far fa-plus" />
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />

          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>

        <div className="writeFormGroup">
          <textarea
            type="text"
            placeholder="Tell your story..."
            className="writeInput writeText"
          />
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}

export default Write;
