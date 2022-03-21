import React from "react";

import { Breadcrumb } from "antd";
import "./bread.module.css";

export const BreadcrumbContent = ({ type, text }) => {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">All posts</a>
        </Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
};
