import React, { useState } from "react";

import Card from "../../../../assets/CardImage8.svg?react";
import Basket from "../../../../assets/shopping-cart.svg?react";

import Styles from "./Catalog.module.scss";

const Catalog = () => {
  const arr = [
    {
      id: 1,
      imgUrl: <Card />,
      title: "Lorem ipsum dolor sit amet consectetur",
      prise: {
        meinPrice: 100,
        newPrice: 40,
      },
    },
    {
      id: 2,
      imgUrl: <Card />,
      title: "lorem",
      prise: {
        meinPrice: 100,
        newPrice: 40,
      },
    },
    {
      id: 3,
      imgUrl: <Card />,
      title: "lorem",
      prise: {
        meinPrice: 100,
        newPrice: 40,
      },
    },
    {
      id: 4,
      imgUrl: <Card />,
      title: "lorem",
      prise: {
        meinPrice: 100,
      },
    },
  ];

  return (
    <div className={Styles.catalog}>
      <div className={Styles.catalog__list}>
        {arr.map(item => (
          <div key={item.id} className={Styles.catalog__item}>
            {item.imgUrl}
            <div className={Styles.catalog__content}>
              <h2 className={Styles.catalog__title}>{item.title}</h2>
              <div className={Styles.catalog__all_prise}>
                <div>
                  <p className={item.prise.newPrice ? Styles.prise__dicoration : Styles.prise__dicoration_none}>{item.prise.meinPrice}</p>
                  <p className={Styles.prise__new}>{item.prise.newPrice}</p>
                </div>
                <button>
                  <Basket />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
