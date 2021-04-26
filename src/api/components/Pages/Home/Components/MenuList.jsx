import React, { useState } from 'react'

const MenuList = () => {
   const [status, setStatus] = useState("status_line_child status_1");
   
   
   
   return (
      <div className="menu_list">
         <ul>
            <li onClick={ () => {setStatus('status_line_child status_1')} } >Hot Dishes</li>
            <li onClick={ () => {setStatus('status_line_child status_2')} } >Cold Dishes</li>
            <li onClick={ () => {setStatus('status_line_child status_3')} } >Soup</li>
            <li onClick={ () => {setStatus('status_line_child status_4')} } >Grill</li>
            <li onClick={ () => {setStatus('status_line_child status_5')} } >Appetizer</li>
            <li onClick={ () => {setStatus('status_line_child status_6')} } >Dessert</li>
         </ul>
         <div className="status_line_parent" >
            <div className={status}></div>
         </div>
      </div>
   )
}

export default MenuList;