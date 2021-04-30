import React from 'react'
import MenuPage from './Components/MenuPage/MenuPage'
import Order from './Components/Order/Order'

import './home.css'

const Home = () => {
   
   return (
      <div className="home">
         <MenuPage/>
         <Order/>
      </div>
   )
}

export default Home