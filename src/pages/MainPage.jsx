import React from "react";
import { PostList } from "../components/PostList/postList";

export const MainPage = ({content,onProductLike,createPost,deletePost}) => {
  return (
    <>
      <PostList
        title="Добро пожаловать на Фотостену!"
        content={content}
        onProductLike={onProductLike}
        createPost={createPost}
        deletePost={deletePost}
      />
    </>
  );
};
