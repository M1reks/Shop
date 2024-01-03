import React from 'react'

import Styles from './Header.module.scss'
import HeaderNavigation from "./components/HeaderNavigation/HeaderNavigation.jsx";
import HeaderPersone from "./components/HeaderPerson/HeaderPersone.jsx";


const Header = () => {

    return (
         <div className='container'>
             <div className={Styles.header}>
                 <HeaderNavigation/>
                 <HeaderPersone/>
             </div>
         </div>
    )
}
export default Header