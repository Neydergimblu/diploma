import React from "react";
import { useForm } from "react-hook-form";
import s from "./styles.module.css";


export function regForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Введите данные</h3>
      <input
        type="text"
        {...register("name", {
          required: "Это поле обязательно",
        })}
        placeholder="Введите имя"
      />
      <div>
        {errors?.name && (
          <p className={s.errorMessage}>{errors?.name?.message}</p>
        )}
      </div>
      <input type="text" {...register("email")} placeholder="Введите email" />
      <input
        type="text"
        {...register("password", {
          pattern: {
            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            message:
              "Пароль должен содержать минимум восемь символов, одну букву латинского алфавита и одну цифру",
          },
        })}
        placeholder="Введите пароль"
      />
      {errors?.password && (
        <p className={s.errorMessage}>{errors?.password?.message}</p>
      )}

      <button>Зарегистрироваться</button>
    </form>
  );
}
