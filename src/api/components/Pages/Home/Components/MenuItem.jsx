import React, { useEffect, useState } from 'react'
import '../item.css';

const MenuItem = (props) => {
   const [name, setName] = useState('');
   const [price, setPrice] = useState('');
   const [count, setCount] = useState('');
   
   useEffect(() => {
      setName(props.name || 'noname');
      setPrice( "$" + (props.price || '0.00') );
      setCount(props.count || '0')
   })
   
   return (
      <div className="item">
         <img height="100px" width="100px" src="https://www.flaticon.com/premium-icon/icons/svg/2268/2268898.svg" alt="item"/>
         <div className="description">
            <p> { name } </p>
            <p> { price } </p>
            <p> { count } </p>
         </div>
      </div>
   )
}

export default MenuItem