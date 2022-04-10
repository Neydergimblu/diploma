import React, { useState, useEffect } from "react";
import { PostList } from "../components/PostList/postList";

export const MainPage = ({content,onProductLike,createPost,deletePost}) => {
  return (
    <>
      <PostList
        title="Welcome to Our Image Board!"
        content={content}
        onProductLike={onProductLike}
        createPost={createPost}
        deletePost={deletePost}
      />
    </>
  );
};
