import React, { useState, useContext } from "react";

import { Card, Col, Avatar, Button } from "antd";
import { ReactComponent as LikeIcon } from "./img/save.svg";
import s from "./post.module.css";
import cn from "classnames";
import { CurrentUserContext } from "./../../context/currentUserContext";


const { Meta } = Card;

export const Post = ({
  onProductLike,
  _id,
  image,
  title,
  likes,
  author,
  text,
  created_at,
  deletePost
}) => {
  const [hover, setHover] = useState(false);

  const currentUser = useContext(CurrentUserContext);
  const isLiked = likes.some(id=> id === currentUser._id);
  const myPost = (_id === author._id);

  function handleClickLikeButton() {
    onProductLike({_id, likes});
  }

  function deleteMyPost() {
    deletePost(_id)
  }

  return (
    <>
      <Col xs={{ span: 30 }} sm={16} md={12} lg={8} className={s.card_wrapper}>
        <Card
          hoverable
          className={s.card}
          cover={<img alt={title} src={image} />}
          description={text}
        >
          <Meta
            title={author.name}
            description={author.email}
            avatar={<Avatar src={author.avatar} />}
          />
          <div className={s.description}>
            <p>{text}</p>
            <p>{created_at}</p>
          </div>
          <Button className={s.likeWrapper} onClick={handleClickLikeButton}>
            {likes.length}
            <LikeIcon
              className={cn(s.likeIcon, { [s.likeIcon_active]: isLiked })}
            />
          </Button>
          {currentUser._id === author._id && <Button onClick={deleteMyPost}>Удалить</Button>}
        </Card>
      </Col>
    </>
  );
};
