import React, { useState } from "react";

import PC from "../../../../assets/pngimg.com - computer_pc_PNG102104.svg?react";
import Laptop from "../../../../assets/screen-1515324_960_720.svg?react";
import Prodcesor from "../../../../assets/1250593.svg?react";
import Monitor from "../../../../assets/3474360.svg?react";
import Mouse from "../../../../assets/73-731117_vector-mouse-icon-png-clipart-png-download-vector.svg?react";
import Phone from "../../../../assets/1259668-200.svg?react";

import Styles from "./DropDownMenu.module.scss";

const DropDownMenu = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const newAllCatalogDB = [
    {
      category: "Ноутбуки",
      description: [{ title: "", modifications: [] }],
      image: Laptop,
    },
    {
      category: "Монітори",
      description: [{ title: "", modifications: [] }],
      image: Monitor,
    },
    {
      category: "Компютери",
      description: [{ title: "", modifications: [] }],
      image: PC,
    },
    {
      category: "Комплюктуючі",
      description: [
        { title: "Процесори", modifications: ["Intel", "AMD"] },
        { title: "Материнські плати", modifications: ["Intel", "AMD"] },
        { title: "Відеокарти", modifications: ["NVIDIA (GeForce)", "AMD (Radeon)"] },
        { title: "Оперативна пам'ять", modifications: ["DDR5", "DDR4", "DDR3", " DDR2"] },
        { title: "Оперативна пам'ять", modifications: ["DDR5", "DDR4", "DDR3", " DDR2"] },
        { title: "Оперативна пам'ять", modifications: ["DDR5", "DDR4", "DDR3", " DDR2"] },
        { title: "Оперативна пам'ять", modifications: ["DDR5", "DDR4", "DDR3", " DDR2"] },
        { title: "Оперативна пам'ять", modifications: ["DDR5", "DDR4", "DDR3", " DDR2"] },
        { title: "Оперативна пам'ять", modifications: ["DDR5", "DDR4", "DDR3", " DDR2"] },
        { title: "Оперативна пам'ять", modifications: ["DDR5", "DDR4", "DDR3", " DDR2"] },
        { title: "Оперативна пам'ять", modifications: ["DDR5", "DDR4", "DDR3", " DDR2"] },
        { title: "Оперативна пам'ять", modifications: ["DDR5", "DDR4", "DDR3", " DDR2"] },
        { title: "Оперативна пам'ять", modifications: ["DDR5", "DDR4", "DDR3", " DDR2"] },
        { title: "Оперативна пам'ять", modifications: ["DDR5", "DDR4", "DDR3", " DDR2"] },
        { title: "Оперативна пам'ять", modifications: ["DDR5", "DDR4", "DDR3", " DDR2"] },
      ],
      image: Prodcesor,
    },
    {
      category: "Девайси",
      description: [{ title: "", modifications: [] }],
      image: Mouse,
    },
    {
      category: "Телефони",
      description: [{ title: "", modifications: [] }],
      image: Phone,
    },
  ];

  const toggleTab = index => {
    setTabIndex(index);
  };

  return (
    <div className={Styles.dropDown}>
      <div className={Styles.dropDown__list}>
        {newAllCatalogDB.map((item, i) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <button onMouseEnter={() => toggleTab(i)} className={Styles.dropDown__button}>
              {<item.image />}
              {item.category}
            </button>
          );
        })}
      </div>
      <div className={Styles.dropDown__content}>
        {newAllCatalogDB.map((item, i) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div className={tabIndex === i ? Styles.active : Styles.def}>
              {item.description.map(item => {
                // eslint-disable-next-line react/jsx-key
                return (
                  // eslint-disable-next-line react/jsx-key
                  <div className={Styles.dropDown__description}>
                    <h2 className={Styles.dropDown__content_title}>{item.title}</h2>
                    {item.modifications.map(item => (
                      // eslint-disable-next-line react/jsx-key
                      <p className={Styles.dropDown__content_modifications}>{item}</p>
                    ))}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DropDownMenu;
