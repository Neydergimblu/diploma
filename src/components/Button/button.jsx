import React from "react";

import { Button } from "antd";
import s from "./button.module.css";

export const ButtonContent = ({ type, text, createPost }) => {
  
  function handlerAddPost() {
    createPost()
  }

  return (
    <>
      <Button type={type} onClick={handlerAddPost} >{text}</Button>
    </>
  );
};
