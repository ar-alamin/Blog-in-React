import React from "react";
import "./post.scss";
import postImg from "../../assets/laptop.jpg";

function Post() {
  return (
    <div className="post">
      <img src={postImg} alt="" className="postImg" />

      <div className="postInfo">
        <div className="postCatagory">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>

        <span className="postTitle">Lorem ipsum amet span</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo in
        architecto quos labore, unde asperiores magnam voluptates voluptatem
        laborum cum. Odit sunt aperiam hic optio deleniti libero, minus id?
        Rem.Illo in architecto quos labore, unde asperiores magnam voluptates
        voluptatem laborum cum. Odit sunt aperiam hic optio deleniti libero,
        minus id? Rem!
      </p>
    </div>
  );
}

export default Post;
