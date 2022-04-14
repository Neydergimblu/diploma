import React, { useContext } from "react";

import s from "./cardData.module.css";
import cn from "classnames";

import { BreadcrumbContent } from "../Bread/bread";
import { ButtonContent } from "../Button/button";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "./../../context/currentUserContext";

import dateFormat, { masks } from "dateformat";

export const CardData = ({
  onProductLike,
  _id,
  image,
  title,
  likes,
  author,
  text,
  tags,
  created_at,
  deletePost,
}) => {
  const currentUser = useContext(CurrentUserContext);
  
  return (
    <>
      <BreadcrumbContent postTitle={title} />
      <div className={s.flex}>
        <div className={s.item}>
          <img src={image} alt="" className={s.image} />
          <div>
            <h1 className={s.header}>{title}</h1>
          </div>
          <div>
            <p>{text}</p>
          </div>
          <div>
            <p>{tags}</p>
          </div>
          <div>
            <p>{dateFormat(created_at, "fullDate")}</p>
          </div>
        </div>
        <div className={s.item}>
          
            <Link to={`/edit/${_id}`}>
              <ButtonContent text="Изменить" />
            </Link>
          
        </div>
      </div>
    </>
  );
};
