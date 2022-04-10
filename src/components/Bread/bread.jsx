import React from "react";

import { Breadcrumb } from "antd";
import "./bread.module.css";
import { Link } from "react-router-dom";

export const BreadcrumbContent = ({postTitle}) => {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/">All posts</Link>
        </Breadcrumb.Item>
        {postTitle && (
          <Breadcrumb.Item>
            <Link to="/">{postTitle}</Link>
          </Breadcrumb.Item>
        )}
      </Breadcrumb>
    </>
  );
};
