import React from "react";

import { useForm } from "react-hook-form";

import Citi from "../../assets/Rectangle 9.svg?react";

import Styles from "./LogIn.module.scss";

const LogIn = () => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({
    mode: "all",
  });

  const onSubmit = data => {
    console.log(JSON.stringify(data));
    reset();
  };

  return (
    <div className="container">
      <div className={Styles.LogIn}>
        <Citi />
        <div className={Styles.LogIn__form}>
          <h1 className={Styles.LogIn__header}>Авторизація</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              Логін
              <input
                {...register("login", {
                  required: "Обовязкове поле",
                  minLength: {
                    value: 2,
                    message: "мінімум 2 символи",
                  },
                })}
              />
              <div>{errors?.login && <p>{errors?.login?.message}</p>}</div>
            </label>
            <label>
              Пароль
              <input
                {...register("register", {
                  required: "Обовязкове поле",
                  minLength: {
                    value: 3,
                    message: "мінімум 3 символи",
                  },
                })}
              />
            </label>
            <div>{errors?.register && <p>{errors?.register?.message}</p>}</div>
            <button>123</button>
          </form>
          <p>Я забув свій пароль</p>
          <p>У мене немає акаунту</p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
