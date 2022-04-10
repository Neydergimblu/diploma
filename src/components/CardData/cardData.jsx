import React, { useState } from "react";

import s from "./cardData.module.css";
import cn from "classnames";
import { BreadcrumbContent } from "../Bread/bread";
import dateFormat, { masks } from "dateformat";

export const CardData = ({
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
  return (
    <>
    <BreadcrumbContent postTitle={title}/>
      <div className={s.flex}>
        <div className={s.item}>
          <img src={image} alt="" className={s.image}/>
          <div>
            <h1 className={s.header}>{title}</h1>
          </div>
          <div>
            <p>{text}</p>
          </div>
          <div>
            <p>{dateFormat(created_at, "fullDate")}</p>
          </div>
        </div>
        <div className={s.item}>Вторая колонка</div>
      </div>
    </>
  );
};
