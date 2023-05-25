import React from "react";
import "./singlePost.scss";
import singleImg from "../../assets/naturee.jpg";

function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src={singleImg} alt="" className="singlePostImg" />

        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet
          <div className="singlePlostEdit">
            <i className="singlePostIcon far fa-edit" />
            <i className="singlePostIcon far fa-trash-alt" />
          </div>
        </h1>

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Alamin</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>

        <p className="singlePsotDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          molestias dolorem magnam ad ullam nesciunt, in impedit fugit eveniet
          consequatur quae dolor? Ratione ex exercitationem enim harum?
          Officiis, nostrum expedita. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Accusamus ipsam autem, quo nulla quia vero, dicta ea
          quaerat ipsa laudantium nobis laborum officiis illum maxime sed
          dignissimos blanditiis doloribus magni!
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
