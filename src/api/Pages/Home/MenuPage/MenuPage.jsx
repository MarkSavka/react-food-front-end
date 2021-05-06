import React from 'react'
import '../Styles/home.css'

import Header from './Header'
import Menu from './Menu/Menu'

const MenuPage = () => {
   return (
      <div className="menu_page">
         <Header />
         <Menu />
      </div>
   )
}
export default MenuPage