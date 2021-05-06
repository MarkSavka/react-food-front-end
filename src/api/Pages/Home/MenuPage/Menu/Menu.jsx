import React, { useState } from 'react'
import MenuList from './MenuList'
import MenuGrid from './MenuGrid'
import '../../Styles/menu.css'

const Menu = () => {
   
   const [category, setCategory] = useState('hot');
   const [fade, setFade] = useState('');

   function changeFade(choose="fade_out"){
      setFade(choose);
   }
   
   function changeCategory(choose){
      setCategory(choose);
      setFade('fade_out');
   }
   
      return(
         <div className="menu" >
            <MenuList changeCategory={changeCategory} />
            <MenuGrid category={category} fade={fade} changeFade={changeFade} />
         </div>
      )
}

export default Menu;