import { useState } from "react";

import { useTranslation } from "react-i18next";

import translations from "../../translations.js";

import User from "../../../../assets/user.svg?react";
import Heart from "../../../../assets/heart.svg?react";
import Basket from "../../../../assets/shopping-cart.svg?react";
import Frame from "../../../../assets/Frame 9.svg?react";
import Search from "../../../../assets/search.svg?react";
import Close from "../../../../assets/x.svg?react";
import Select from "../../../UI/Select/Select.jsx";

import styles from "./HeaderPersone.module.scss";

const HeaderPerson = () => {
  const options = [
    { value: "Ukraine", label: "ua" },
    { value: "Russian", label: "ru" },
    { value: "USA", label: "en" },
  ];

  const [valueInput, setValueInput] = useState("");

  const { i18n } = useTranslation();
  // const supportedLngs = i18n.options.supportedLngs.filter(option => option !== "cimode");
  const lng = localStorage.getItem("lng");

  return (
    <div className={styles.header__user}>
      <div className={styles.header__input}>
        <input
          value={valueInput}
          onChange={e => setValueInput(e.target.value)}
          placeholder={translations[i18n.language]?.search}
          className={styles.header__input_text}
          type="text"
          name=""
          id=""
        />
        <button className={styles.header__input_button}>{valueInput ? <Close onClick={() => setValueInput("")} /> : <Search />}</button>
      </div>
      <div className={styles.header__navigation}>
        <div>
          <User />
        </div>
        <div>
          <Heart />
        </div>
        <div>
          <Basket />
        </div>
        <div>
          <Frame />
        </div>
      </div>
      <div className={styles.header__lang}>
        <Select defaultValue={lng} options={options} />
      </div>
    </div>
  );
};

export default HeaderPerson;
