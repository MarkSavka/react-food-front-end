import React, { useEffect, useState } from 'react'
import SVG_delete from '../../../assets/svg/SVG_delete'
import OrderItems from './OrderItems/OrderItems';
import RadioButtons from './RadioButtons/radioButtons'

const Order = () => {

   const [local, setLocal] = useState([]);
   const [inputCount, setInputCount] = useState(1)

   useEffect(() => {
      setLocal(JSON.parse(localStorage.getItem("orderList")))
   }, [])

   const inputCountValidator = (count) => {
      console.log("conut", count)
      count > 0 && count <= 40
         ? setInputCount(count)
         : count > 40 
            ? setInputCount(40)
            :  count < 0 
               ? setInputCount(1)
               : setInputCount(count);
   }

   return (
      <div className="order">
         <p>Order #342574</p>
         <RadioButtons />
         {/* Order items */}
         {
            local && local.map(item => {
               return <OrderItems img={item.img} name={item.name} price={item.price} />
            })
         }
      </div>
   )
}

export default Order