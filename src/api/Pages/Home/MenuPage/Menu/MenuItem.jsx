import React, { useEffect, useState } from 'react'
import '../../Styles/item.css';

const MenuItem = (props) => {
   const [name, setName] = useState('');
   const [price, setPrice] = useState('');
   const [count, setCount] = useState('');
   const [img, setImg] = useState('');
   
   useEffect(() => {
      setName(props.name || 'noname');
      setPrice( "$" + (props.price || '0.00') );
      setCount(props.count || '0');
      setImg(props.img || 'https://www.flaticon.com/svg/vstatic/svg/868/868753.svg?token=exp=1619440906~hmac=d867d45481785f41c9ee85595e6a00b7')
   })
   
   return (
      <div className="item">
         <img height="100px" width="100px" src={img} alt="item"/>
         <div className="description">
            <p> { name } </p>
            <p> { price } </p>
            <p> { count } </p>
         </div>
      </div>
   )
}

export default MenuItem