import React from "react";

import { useForm } from "react-hook-form";

import Citi from "../../assets/Rectangle 9.svg?react";

import Button from "../UI/button/button.jsx";

import Styles from "./SignIn.module.scss";

const SignIn = () => {
  const onSubmit = data => {
    console.log(JSON.stringify(data));
    reset();
  };

  const {
    register,
    formState: { errors, isValid },
    reset,
    handleSubmit,
  } = useForm({
    mode: "all",
  });

  return (
    <div className="container">
      <div className={Styles.signin}>
        <Citi className={Styles.signin__image} />
        <div className={Styles.signin__form}>
          <h1 className={Styles.signin__header}>Авторизація</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={Styles.signin__content}>
              <label className={Styles.signin__label}>
                Логін
                <div className={Styles.input__list}>
                  <input
                    type="password"
                    className={Styles.signin__input}
                    {...register("login", {
                      required: "Обовязкове поле",
                      minLength: {
                        value: 3,
                        message: "мінімум 3 символи",
                      },
                    })}
                  />
                  <div className={Styles.signin__error}>{errors?.login && <p>{errors?.login?.message}</p>}</div>
                </div>
              </label>
              <label className={Styles.signin__label}>
                Email
                <div className={Styles.input__list}>
                  <input
                    type="emailss"
                    className={Styles.signin__input}
                    {...register("emails", {
                      required: "Обовязкове поле",
                      // validate: { value: isEmail, m },
                      pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Email не правильне" },
                    })}
                  />
                  <div className={Styles.signin__error}>{errors?.emails && <p>{errors?.emails?.message}</p>}</div>
                </div>
              </label>
              <label className={Styles.signin__label}>
                Пароль
                <div className={Styles.input__list}>
                  <input
                    type="password"
                    className={Styles.signin__input}
                    {...register("password", {
                      required: "Обовязкове поле",
                      minLength: {
                        value: 3,
                        message: "мінімум 3 символи",
                      },
                    })}
                  />
                  <div className={Styles.signin__error}>{errors?.password && <p>{errors?.password?.message}</p>}</div>
                </div>
              </label>
              <label className={Styles.signin__label}>
                Повторити пароль
                <div className={Styles.signin__input_list}>
                  <input
                    type="morePassword"
                    className={Styles.signin__input}
                    {...register("morePassword", {
                      required: "Обовязкове поле",
                      minLength: {
                        value: 3,
                        message: "мінімум 3 символи",
                      },
                    })}
                  />
                  <div className={Styles.signin__error}>{errors?.morePassword && <p>{errors?.morePassword?.message}</p>}</div>
                </div>
              </label>
            </div>
            <Button buttonText="Зараєструватися" disabled={!isValid} />
          </form>
          <div className={Styles.signin__recovery}>
            <p>Я забув свій пароль</p>
            <p>У мене немає акаунту</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
