import { useForm } from "react-hook-form";

import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";

import Citi from "../../assets/Rectangle 9.svg?react";
import { auth } from "../../firebase";

import Styles from "./LogIn.module.scss";
import translations from "./translation.js";
import translation from "./translation.js";

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
    const { login, password } = data;
    signInWithEmailAndPassword(auth, login, password).then(() => {
      reset();
    });
  };

  const { t, i18n } = useTranslation();
  Object.keys(translations).forEach(lng => {
    i18n.addResourceBundle(lng, "LogIn", translations[lng]);
  });

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
              <div className={Styles.LogIn__error}>
                {errors?.login?.type === "required"
                  ? translation[i18n.language].login.error.required
                  : errors?.login?.type === "minLength"
                    ? translation[i18n.language]?.login.error.minLength
                    : null}
              </div>
            </label>
            <label className={Styles.LogIn__label}>
              {t("LogIn:password.header")}
              <input
                type="password"
                className={Styles.LogIn__input}
                {...register("password", {
                  required: translation[i18n.language]?.login.error.required,
                  minLength: {
                    value: 3,
                    message: translation[i18n.language]?.login.error.minLength,
                  },
                })}
              />
              <div className={Styles.LogIn__error}>
                {errors?.password?.type === "required"
                  ? translation[i18n.language]?.login.error.required
                  : errors?.password?.type === "minLength"
                    ? translation[i18n.language]?.login.error.minLength
                    : null}
              </div>
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
