import React, { useEffect, useState } from 'react'

const MenuItem = ({ name, price, count, img, id}) => {
   const [priceState, setPrice] = useState('');
   const [imgState, setImg] = useState('');
   
   useEffect(() => {
      setPrice( "$" + (price || '0.00') );
      setImg(img || 'https://www.flaticon.com/svg/vstatic/svg/868/868753.svg?token=exp=1619440906~hmac=d867d45481785f41c9ee85595e6a00b7')
   })

   const writeToLocalStorage = () => {
      const local = JSON.parse(localStorage.getItem("orderList"))
      if(local){
         if(local.find(item => item.id == id) ){

         } else {
         local.push({
            id: id,
            name,
            price: priceState,
            count,
            img: imgState,
         })
         localStorage.setItem("orderList", JSON.stringify(local))
         }
      } else {
         localStorage.setItem("orderList", JSON.stringify([]))
         writeToLocalStorage()
      }
   }
   
   return (
      <div className="item" onClick={ () => writeToLocalStorage({name, priceState}) }>
         <img height="100px" width="100px" src={imgState} alt="item"/>
         <div className="description">
            <p> { name || "" } </p>
            <p> { priceState } </p>
            <p> { count || '0' } </p>
         </div>
      </div>
   )
}

export default MenuItem