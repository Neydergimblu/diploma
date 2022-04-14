import React, { useState, useEffect } from "react";

import { Layout } from "antd";
import { HeaderContent } from "./components/Header/header";
import { FooterContent } from "./components/Footer/footer";

import serverApi from "./utils/serverApi";
import { CurrentUserContext } from "./context/currentUserContext";
import { Route, Routes, useParams } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { OneCardPage } from "./pages/OneCardPage";
import { Page404 } from "./pages/Page404";
import { EditPost } from "./pages/EditPost/EditPost";

const { Header, Footer, Content } = Layout;

export const App = () => {
  //Стейты
  const [content, setContent] = useState([]);
  const [userInformation, setUserInformation] = useState({});
  const [postFlag, setPostFlag] = useState(false);


  //Эффекты
  useEffect(() => {
    serverApi
      .getPosts()
      .then((newPostData) => {
        setContent(newPostData);
      })
      .catch((error) => {
        console.log(error);
      });
    setPostFlag(false);
  }, [postFlag, Route]);

  useEffect(() => {
    Promise.all([serverApi.getPosts(), serverApi.getUserInfo()])
      .then(([postsData, userData]) => {
        setContent(postsData);
        setUserInformation(userData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //Функции
  //Удаление поста
  function deletePost(productId) {
    serverApi.deletePost(productId).then(console.log("Удалено"));
    setPostFlag(true);
  }

  function targetFlag ({flag}) {
    setPostFlag(flag)
  }

  //
  function handleProductLike({ _id, likes }) {
    const isLiked = likes.some((id) => id === userInformation._id);
    serverApi.changeLikeStatus(_id, isLiked).then((newCard) => {
      const newCardsState = content.map((c) => {
        return c._id === newCard._id ? newCard : c;
      });

      setContent(newCardsState);
    });
  }

  return (
    <CurrentUserContext.Provider value={userInformation}>
      <Layout className="wrapper">
        <Header className="header">
          <HeaderContent user={userInformation} />
        </Header>
        <Content className="contentWrapper">
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={
                  <MainPage
                    content={content}
                    onProductLike={handleProductLike}
                    deletePost={deletePost}
                  />
                }
              />

              <Route
                path="/:postID"
                element={<OneCardPage />}
              />

              <Route path="*" element={<Page404 />} />

              <Route
                path="/edit/:postID"
                element={<EditPost title="Редактирование поста" targetFlag={targetFlag}/>}
              />

              <Route
                path="/new"
                element={<EditPost title="Создание поста" type="new" targetFlag={targetFlag}/>}
              />
            </Routes>
          </div>
        </Content>
        <Footer className="footer">
          <FooterContent />
        </Footer>
      </Layout>
    </CurrentUserContext.Provider>
  );
};
