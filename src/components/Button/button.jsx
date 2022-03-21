import React from "react";

import { Button } from "antd";
import "./button.css";

export const ButtonContent = ({ type, text }) => {
  
  function handlerAddPost() {
    console.log("Есть контакт!");
  }

  return (
    <>
      <Button type={type} onClick={handlerAddPost}>{text}</Button>
    </>
  );
};
