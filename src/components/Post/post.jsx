import React from "react";

import { Card, Col, Avatar, Image } from "antd";
import { UserOutlined } from '@ant-design/icons';
import s from "./post.module.css";

export const Post = ({
  image,
  title,
  author: { avatar, name, email },
  text,
  created_at,
}) => {
  return (
    <>
      <Col xs={{ span: 12 }} lg={{ span: 8 }} className={s.card_wrapper}>
        <Card className={s.card} title={title}>
          <img src={image} alt={title} />
          <Avatar src={avatar} />
          <h3>{name}</h3>
          <p>{email}</p>
          <p>{text}</p>
          <p>{created_at}</p>
        </Card>
      </Col>
    </>
  );
};
