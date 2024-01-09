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
                Пароль
                <div className={Styles.signin__input_list}>
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
