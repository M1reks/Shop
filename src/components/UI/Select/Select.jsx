import { useState } from "react";

import { useTranslation } from "react-i18next";

import Vector from "../../../assets/Vector 5.svg?react";

import s from "./Select.module.scss";

// eslint-disable-next-line react/prop-types
const Select = ({ defaultValue, options }) => {
  const { i18n } = useTranslation();

  const [selectActive, setSelectActive] = useState(false);
  const [defaultLabel, setDefaultLabel] = useState(defaultValue);

  const handleClick = item => {
    setDefaultLabel(item.label);
    setSelectActive(item => !item);
    void i18n.changeLanguage(item.label.toLowerCase());
    localStorage.setItem("lng", item.label);
  };
  const renderItems = item => {
    const newArr = item.filter(item => !item.label.includes(defaultLabel));
    return newArr.map((item, i) => (
      <li key={i} onClick={() => handleClick(item)} className={selectActive ? s.dropdown__item_active : s.dropdown__item_hidden}>
        {item.label}
      </li>
    ));
  };

  return (
    <div className={s.dropdown}>
      <div className={s.dropdown__header} onClick={() => setSelectActive(item => !item)}>
        {defaultLabel}
        <Vector />
      </div>
      <div className={s.dropdown__content}>
        <ul className={s.dropdown__item}>{renderItems(options)}</ul>
      </div>
    </div>
  );
};

export default Select;
