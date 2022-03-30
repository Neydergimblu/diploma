import React from "react";
import s from "./header.module.css";

import { Menu, Avatar, Popover } from "antd";
import { UserOutlined } from "@ant-design/icons";

export const HeaderContent = ({ className, user }) => {
  const content = (
    <div>
      <p>Роль: {user.about}</p>
      <p>Email: {user.email}</p>
    </div>
  );

  return (
    <>
      <div className="container">
        <div className={s.menuWrapper}>
          <div className="logo" />
          <Menu mode="horizontal" className={s.menu}>
            <Menu.Item key="mail">Home</Menu.Item>
            <Menu.Item key="app">Documents</Menu.Item>
            <Menu.Item key="alipay">GetHub</Menu.Item>
          </Menu>
          <div>
            <Popover
              placement="bottomRight"
              title={user.name}
              content={
                <div>
                  <span>Роль:</span><br />
                  <span><b>{user.about}</b></span><br/>
						<span>Email:</span><br />
                  <span><b>{user.email}</b></span>
                </div>
              }
              trigger="click"
            >
              <Avatar
                size="large"
                icon={<UserOutlined />}
                src={user.avatar && user.avatar}
                style={{ backgroundColor: "#7D6EE7", cursor: "pointer" }}
              />
            </Popover>
          </div>
        </div>
      </div>
    </>
  );
};
