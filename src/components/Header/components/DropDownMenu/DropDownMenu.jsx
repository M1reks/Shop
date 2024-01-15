import React, { useState } from "react";

import Styles from "./DropDownMenu.module.scss";

const DropDownMenu = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const catalogDB = ["Ноутбуки", "Комп'ютери", "Комплентуючі"];
  const contentDB = ["Lorem ipsum dolor sit amet, consectet", "Lorem ipsum dolor sit amet, consectet", "Комплентуючі"];

  return (
    <div className={Styles.dropDown}>
      <div className={Styles.dropDown__list}>
        {catalogDB.map((item, i) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <button className={Styles.dropDown__list}>{item}</button>
          );
        })}
      </div>
      <div className={Styles.dropDown__content}>
        {contentDB.map((item, i) => {
          // eslint-disable-next-line react/jsx-key
          return <div className={tabIndex === i ? Styles.active : Styles.def}>{item}</div>;
        })}
      </div>
    </div>
  );
};

export default DropDownMenu;
