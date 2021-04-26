import React from 'react';
import MenuList from './MenuList'
import MenuGrid from './MenuGrid'
import '../menu.css'

const Menu = () => {
      return(
         <div className="menu" >
            <MenuList />
            <MenuGrid />
         </div>
      )
}

export default Menu;