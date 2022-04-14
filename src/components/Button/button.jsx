import React from "react";

import { Button } from "antd";
import s from "./button.module.css";

export const ButtonContent = ({ type, text, handleFunction }) => {

  return (
    <>
      <Button type={type} onClick={handleFunction} className={s.button}>{text}</Button>
    </>
  );
};
