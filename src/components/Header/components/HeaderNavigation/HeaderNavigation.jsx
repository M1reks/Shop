import React from 'react';
import styles from './HeaderNavigation.module.scss'
import translations from "../../translations.js";
import Vector from "../../../../assets/Vector 5.svg?react";
import {useTranslation} from "react-i18next";


const HeaderPersone = () => {

    const { t, i18n } = useTranslation()

    return (
            <div className={styles.header__search}>
                <div className={styles.header__search_logo}>
                    <div className={styles.header__search_item}></div>
                    <div className={styles.header__search_logo}>NoName</div>
                </div>
                <div className={styles.header__search_category}>
                    <p>{translations[i18n.language].main}</p>
                    <div className={styles.header__search_categoryitem}>
                        <p>{translations[i18n.language].category}</p>
                        <Vector/>
                    </div>
                    <p>{translations[i18n.language].сontacts}</p>
                    <p>{translations[i18n.language].сallphone}</p>
                </div>
            </div>
    );
};

export default HeaderPersone;