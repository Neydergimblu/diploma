import React from "react";

import { Row, Col } from "antd";
import s from "./postList.module.css";

import { BreadcrumbContent } from "../Bread/bread";
import { ButtonContent } from "../Button/button";
import { Post } from "../Post/post";

export const PostList = ({ title, content }) => {
  return (
    <>
      <div className="container">
        <BreadcrumbContent />
        <div className={s.items}>
          <div>
            <h1>
              {!title ? "Упс! Здесь должен был быть заголовок..." : title}
            </h1>
            <p>We're stoked that you're here. 🥳</p>
          </div>
          <ButtonContent text="Create Post" />
        </div>
        <Row justify="space-between" gutter={20} wrap>
          {content.map((item) => (
            <Post key={item._id} {...item} />
          ))}
        </Row>
      </div>
    </>
  );
};
