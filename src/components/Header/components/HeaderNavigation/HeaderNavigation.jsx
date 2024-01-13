import React, { useState } from "react";

import { useTranslation } from "react-i18next";

import translations from "../../translations.js";

import Vector from "../../../../assets/Vector 5.svg?react";

import DropDownMenu from "../DropDownMenu/DropDownMenu.jsx";

import styles from "./HeaderNavigation.module.scss";

const HeaderPerson = () => {
  const { t, i18n } = useTranslation();
  Object.keys(translations).forEach(lng => {
    i18n.addResourceBundle(lng, "header", translations[lng]);
  });

  return (
    <div className={styles.header__search}>
      <div className={styles.header__search_logo}>
        <div className={styles.header__search_item}></div>
        <div className={styles.header__search_logo}>NoName</div>
      </div>
      <div className={styles.header__search_category}>
        <p>{t("header:main")}</p>
        <div className={styles.header__search_categoryitem}>
          <p>{t("header:category")}</p>
          <Vector />
          <DropDownMenu />
        </div>
        <p>{t("header:сontacts")}</p>
        <p>{t("header:сallphone")}</p>
      </div>
    </div>
  );
};

export default HeaderPerson;
