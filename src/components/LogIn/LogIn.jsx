import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";

import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";

import Citi from "../../assets/Rectangle 9.svg?react";

import Styles from "./LogIn.module.scss";
import translations from "./translation.js";

const LogIn = () => {
  const [loginTranslate, setLoginTranslate] = useState("");

  const {
    register,
    formState: { errors, isValid },
    reset,
    handleSubmit,
  } = useForm({
    mode: "all",
  });

  const onSubmit = () => {
    reset();
  };

  const { t, i18n } = useTranslation();
  Object.keys(translations).forEach(lng => {
    i18n.addResourceBundle(lng, "LogIn", translations[lng]);
  });

  useEffect(() => {
    setLoginTranslate(translations[i18n.language].login.error.required);
    console.log(translations[i18n.language].login.error.required);
    console.log(loginTranslate);
  }, [i18n.language]);

  //TODO: Зделать чтоб пароль можно было смотреть
  return (
    <div className="container">
      <div className={Styles.LogIn}>
        <Citi className={Styles.LogIn__image} />
        <div className={Styles.LogIn__form}>
          <h1 className={Styles.LogIn__header}>{t("LogIn:header")}</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className={Styles.LogIn__label}>
              {t("LogIn:login.header")}
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
              {t("LogIn:password.header")}
              <input
                type="password"
                className={Styles.LogIn__input}
                {...register("password", {
                  required: loginTranslate,
                  minLength: {
                    value: 3,
                    message: translations[i18n.language].login.error.minLength,
                  },
                })}
              />
              <div className={Styles.LogIn__error}>{errors?.password && <p>{errors?.password?.message}</p>}</div>
            </label>
            <button className={Styles.login__button} disabled={!isValid}>
              {t("LogIn:button")}
            </button>
          </form>
          <div className={Styles.login__recovery}>
            <Link to="/LogIn" className={Styles.login__link}>
              {t("LogIn:recovery.user")}
            </Link>
            <p>{t("LogIn:recovery.password")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
