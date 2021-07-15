import React from 'react'

import RadioButtons from './RadioButtons/radioButtons'
import OrderItems from './OrderItems/orderItems'

const Order = () => {
   return (
      <div className="order">
         <p>Order #342574</p>
         <RadioButtons />
         <OrderItems />
      </div>
   )
}

export default Order