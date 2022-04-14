import React, { useState, useEffect } from "react";

import { Row, Pagination } from "antd";
import s from "./postList.module.css";

import { BreadcrumbContent } from "../Bread/bread";
import { ButtonContent } from "../Button/button";
import { Post } from "../Post/post";
import { Link } from "react-router-dom";

export const PostList = ({
  title,
  content,
  onProductLike,
  createPost,
  deletePost,
}) => {
  //Стейт номера страницы
  const [page, setPage] = useState(1);
  //Стейт количества элементов на странице
  const [itemPage, setItemPage] = useState(6);
  //Стейт начальной позиции
  const [startPosition, setStartPosition] = useState(0);
  //Стейт конечной позиции
  const [endPosition, setEndPosition] = useState(itemPage);

  //Функция изменения данных об отображении страницы
  const handleGetPage = (page) => {
    setStartPosition(page * itemPage - itemPage);
    setEndPosition(page * itemPage);
    setPage(page);
  };

  return (
    <>
      <BreadcrumbContent />
      <div className={s.items}>
        <div>
          <h1 className={s.title}>
            {!title ? "Упс! Здесь должен был быть заголовок..." : title}
          </h1>
        </div>
        <Link to={`/new`}>
          <ButtonContent text="Добавить"/>
        </Link>
      </div>
      <Row gutter={20} wrap className={s.row}>
        {content.map(
          (item, index) =>
            index >= startPosition &&
            index < endPosition && (
              <Post
                key={item._id}
                {...item}
                onProductLike={onProductLike}
                deletePost={deletePost}
              />
            )
        )}
      </Row>
      <Pagination
        current={page}
        defaultCurrent={page}
        defaultPageSize={itemPage}
        total={content.length}
        onChange={handleGetPage}
        showSizeChanger={false}
      />
    </>
  );
};
