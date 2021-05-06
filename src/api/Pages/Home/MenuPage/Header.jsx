import React from 'react'
import './Styles/header.css'

const Header = () => {
   
   function getLocalDate () {
      let date = new Date(Date())
      
      let options = {
         year: 'numeric',
         day: 'numeric',
         month: 'long',
         weekday: 'long',
      }
      return date.toLocaleString('en-US', options)
   }
   
   return (
      <header>
         <div className="header-data-info">
            <p>Jaedar Resto</p>
            <p>{getLocalDate()}</p>
         </div>
         <div className="header-input-search">
            <input type="text" placeholder={"Search for food, coffee, etc.."}/>
         </div>
      
      </header>
   )
}

export default Header