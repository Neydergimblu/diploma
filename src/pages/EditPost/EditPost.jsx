import React, {useState, useEffect} from "react";

import { useForm } from "react-hook-form";
import { BreadcrumbContent } from "../../components/Bread/bread";
import serverApi from "../../utils/serverApi";
import { useNavigate, useParams } from "react-router-dom";

import s from "./editPost.module.css";


export const EditPost = ({ title, type, targetFlag }) => {
  
  const [postDataId, setPostDataId] = useState({type: false});
  const { postID } = useParams();
  const [postFlag, setPostFlag] = useState(true);

  let navigate = useNavigate();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur"
  });

  useEffect(() => {
    serverApi.getPostId(postID).then((data) => {
      setPostDataId(data);
      setValue("title", data.title);
      setValue("text", data.text);
      setValue("image", data.image);
      setValue("tags", data.tags);

    });
  }, [postID]);
  
  //Изменение поста
  function handleSubmitFormEdit(data) {
    console.log(data);
    // const tagsArray = data.tags.toLowerCase().split(",");
    // data.tags = tagsArray;
    console.log(data);

    serverApi.editPost(data, postID)
    .then(() => {
      console.log("Всё ништяк");
      targetFlag({postFlag});
      navigate("/");
    })
    .catch((error) => {
      console.log(error);
    });
    
  }

  //Создание поста
  function handleSubmitFormNew(data) {
    const tagsArray = data.tags.toLowerCase().split(" ");
    data.tags = tagsArray;
    console.log(data);

    serverApi.addPost(data)
    .then(() => {
      targetFlag({postFlag});
      navigate("/");
    })
    .catch((error) => {
      console.log(error);
    });
    
  }

  return (
    <>
      <BreadcrumbContent postTitle={title}/>
      <h1 className={s.title}>{title}</h1>

      <form 
      onSubmit={handleSubmit(type==="new" ? handleSubmitFormNew : handleSubmitFormEdit)} 
      className={s.form}>
        <label htmlFor="">Заголовок</label>
        <input 
        type="text" 
        {...register("title", {
          required: "Поле обязательное для заполнения"
        })}
        // onChange={e => setTitleForm(e.target.value)}
        />
        <div className={s.error}>{errors?.title && <span>{errors?.title?.message}</span>}</div>

        <label htmlFor="">Описание</label>
        <input type="text" {...register("text")} 
        // onChange={e => setTextForm(e.target.value)}
        />
        <div className={s.error}>{errors?.text && <span>{errors?.text?.message}</span>}</div>

        <label htmlFor="">Фото</label>
        <input type="text" {...register("image")} 
        // onChange={e => setImageForm(e.target.value)}
        />
        <div className={s.error}>{errors?.image && <span>{errors?.image?.message}</span>}</div>

        <label htmlFor="">Теги (через пробел)</label>
        <input type="text" {...register("tags")} 
        // onChange={e => setTagsForm(e.target.value)}
        />
        <button type="submit" className={s.button}>
        {type==="new" ? "Создать" : "Изменить"}
          </button>
      </form>
    </>
  );
};
