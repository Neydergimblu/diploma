import React, { useState, useEffect } from "react";

import { Layout } from "antd";
import { HeaderContent } from "./components/Header/header";
import { FooterContent } from "./components/Footer/footer";
import {postData} from "./posts.js";


import { PostList } from "./components/PostList/postList";

const { Header, Footer, Content } = Layout;

export const App = () => {

  const [content, setCards] = useState(postData);

  return (
    <>
      <Layout className="wrapper">
        <Header className="header">
          <HeaderContent className="menu" />
        </Header>
        <Content className="contentWrapper">
          <PostList 
            title="Welcome to Our Image Board!"
            content = {content}
          />
        </Content>
        <Footer>
          <FooterContent className="footerContent" />
        </Footer>
      </Layout>
    </>
  );
};
