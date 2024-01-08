import React from "react";

import { useForm } from "react-hook-form";

import Citi from "../../assets/Rectangle 9.svg?react";

import Input from "../UI/Input/Input.jsx";

import Styles from "./LogIn.module.scss";

const LogIn = () => {
  const {
    register,
    formState: { errors, isValid },
    reset,
    handleSubmit,
  } = useForm({
    mode: "all",
  });

  const onSubmit = data => {
    console.log(JSON.stringify(data));
    reset();
  };

  // const isEmail = data => {
  //   console.log(errors);
  //   return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data);
  // };

  //TODO: Зделать чтоб пароль можно было смотреть
  return (
    <div className="container">
      <div className={Styles.LogIn}>
        <Citi className={Styles.LogIn__image} />
        <div className={Styles.LogIn__form}>
          <h1 className={Styles.LogIn__header}>Авторизація</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className={Styles.LogIn__label}>
              Логін
              <input
                className={Styles.LogIn__input}
                {...register("login", {
                  required: "Обовязкове поле",

                  minLength: {
                    value: 3,
                    message: "мінімум 3 символи",
                  },
                })}
              />
              <div className={Styles.LogIn__error}>{errors?.login && <p>{errors?.login?.message || "Error"}</p>}</div>
            </label>
            <label className={Styles.LogIn__label}>
              Пароль
              <input
                type="password"
                className={Styles.LogIn__input}
                {...register("password", {
                  required: "Обовязкове поле",
                  minLength: {
                    value: 3,
                    message: "мінімум 3 символи",
                  },
                })}
              />
              <div className={Styles.LogIn__error}>{errors?.password && <p>{errors?.password?.message}</p>}</div>
            </label>
            <button className={Styles.login__button} disabled={!isValid}>
              Авторизуватися
            </button>
          </form>
          <div className={Styles.login__recovery}>
            <p>Я забув свій пароль</p>
            <p>У мене немає акаунту</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
