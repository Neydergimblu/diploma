import React, { useContext } from "react";

import { Card, Col, Avatar, Button } from "antd";
import { ReactComponent as LikeIcon } from "./img/save.svg";
import s from "./post.module.css";
import cn from "classnames";
import { CurrentUserContext } from "./../../context/currentUserContext";
import { Link } from "react-router-dom";
import dateFormat, { masks } from "dateformat";

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
  deletePost,
}) => {
  const currentUser = useContext(CurrentUserContext);
  const isLiked = likes.some((id) => id === currentUser._id);

  function handleClickLikeButton() {
    onProductLike({ _id, likes });
  }

  //Удаление моего поста
  function deleteMyPost() {
    deletePost(_id);
  }

  return (
    <>
      <Col xs={{ span: 30 }} sm={16} md={12} lg={8} className={s.card_wrapper}>
        <Link to={`/posts/${_id}`}>
          <Card
            className={s.card}
            cover={<img alt={title} src={image} className={s.image} />}
            description={text}
          >
            <div className={s.titleBlock}>{title}</div>
            <div className={s.description}>{text}</div>
            <p>{dateFormat(created_at, "fullDate")}</p>
            <Meta
              title={author.name}
              description={author.email}
              avatar={<Avatar src={author.avatar} />}
            />

            <Button className={s.likeWrapper} onClick={handleClickLikeButton}>
              {likes.length}
              <LikeIcon
                className={cn(s.likeIcon, { [s.likeIcon_active]: isLiked })}
              />
            </Button>
            {currentUser._id === author._id && (
              <div className={s.deleteButton} onClick={deleteMyPost}>
                Удалить
              </div>
            )}
            {/* <div className={s.linkCard}>
            <Link to={`/product/${_id}`}>Открыть</Link>
          </div> */}
          </Card>
        </Link>
      </Col>
    </>
  );
};
