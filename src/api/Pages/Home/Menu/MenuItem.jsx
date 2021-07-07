import React, { useEffect, useState } from 'react'

const MenuItem = ({ name, price, count, img}) => {
   const [nameState, setName] = useState('');
   const [priceState, setPrice] = useState('');
   const [countState, setCount] = useState('');
   const [imgState, setImg] = useState('');
   
   useEffect(() => {
      setName(name || 'noname');
      setPrice( "$" + (price || '0.00') );
      setCount(count || '0');
      setImg(img || 'https://www.flaticon.com/svg/vstatic/svg/868/868753.svg?token=exp=1619440906~hmac=d867d45481785f41c9ee85595e6a00b7')
   })
   
   return (
      <div className="item" onClick={ () => console.log() }>
         <img height="100px" width="100px" src={img} alt="item"/>
         <div className="description">
            <p> { nameState } </p>
            <p> { priceState } </p>
            <p> { countState } </p>
         </div>
      </div>
   )
}

export default MenuItem