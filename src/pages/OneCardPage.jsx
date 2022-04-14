import React, { useState, useEffect } from "react";

import { CardData } from "./../components/CardData/cardData";
import serverApi from "../utils/serverApi";

import { useParams } from "react-router-dom";
import { format } from "date-fns";

export const OneCardPage = (onProductLike) => {
  const [postData, setPostData] = useState({});
  const { postID } = useParams();

  useEffect(() => {
    serverApi.getPostId(postID).then((data) => {
      setPostData(data);
    });
  }, []);

  return (
    <>
        <CardData {...postData} />
    </>
  );
};
