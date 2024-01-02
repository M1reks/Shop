import React, {useState, useTransition} from 'react'

import Styles from './Header.module.scss'
import User from '../../assets/user.svg?react'
import Heart from '../../assets/heart.svg?react'
import Basket from '../../assets/shopping-cart.svg?react'
import Frame from '../../assets/Frame 9.svg?react'
import Search from '../../assets/search.svg?react'
import Vector from '../../assets/Vector 5.svg?react'
import Close from '../../assets/x.svg?react'
import Select from "../UI/Select/Select.jsx";
import {useTranslation} from "react-i18next";
import translations from "./translations";


const Header = () => {

    const { t, i18n } = useTranslation()

    const options = [
        { value: 'Ukraine', label: 'UA' },
        { value: 'Russian', label: 'RU' },
        { value: 'USA', label: 'EN' }
    ];

    const [valueInput, setValueInput] = useState('')

    // Object.keys(translations).forEach(lng => {
    //     i18n.addResourceBundle(lng, 'header', {greeting: translations[lng]})
    // })

    // const items = t('header:greeting')
    // items.map(item => console.log(item))

    return (
         <div className='container'>
             <div className={Styles.header}>

                 <div className={Styles.header__search}>
                     <div className={Styles.header__search_logo}>
                         <div className={Styles.header__search_item}></div>
                         <div className={Styles.header__search_logo}>NoName</div>
                     </div>
                     <div className={Styles.header__search_category}>
                         <p>{translations[i18n.language].main}</p>
                        <div className={Styles.header__search_categoryitem}>
                            <p>{translations[i18n.language].category}</p>
                            <Vector/>
                        </div>
                         <p>{translations[i18n.language].сontacts}</p>
                         <p>{translations[i18n.language].сallphone}</p>
                     </div>
                 </div>
                 <div className={Styles.header__user}>
                     <div className={Styles.header__input}>
                         <input value={valueInput} onChange={e => setValueInput(e.target.value)}  placeholder={translations[i18n.language].search} className={Styles.header__input_text} type="text" name="" id=""/>
                         <button className={Styles.header__input_button}>
                             {valueInput ? <Close onClick={() => setValueInput('')}/> : <Search/>}
                         </button>
                     </div>
                     <div className={Styles.header__navigation}>
                         <div >
                             <User/>
                         </div>
                         <div >
                             <Heart/>
                         </div>
                         <div >
                             <Basket/>
                         </div>
                         <div >
                             <Frame/>
                         </div>
                     </div>
                     <div className={Styles.header__lang}>
                         <Select defaultValue='UA' options={options}/>
                     </div>
                 </div>
             </div>
         </div>
    )
}
export default Header