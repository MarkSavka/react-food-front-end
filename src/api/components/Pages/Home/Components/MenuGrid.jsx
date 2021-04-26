import React, { useEffect, useState } from 'react'
import SVG_arrow_down from '../../../../assets/svg/SVG_arrow_down';
import MenuItem from './MenuItem'
import getItemsRequest from '../service/getMassiveItems'

const MenuGrid = () => {
   
   const [items, setItems] = useState(undefined);
   
   useEffect( async () => {
      setItems( await getItemsRequest() );
   }, []);
   
   return (
      <div className="menu_grid">
         <div className="menu_top" >
            <p>Choose Dishes</p>
            <button>
               <SVG_arrow_down width="20px" height="10px" fill="white" />
               Dine in
            </button>
         </div>
         <div className="menu_grid_items">
            { items && items.items.map(item => {
               return <MenuItem name={item.name} price={item.price} count={item.count} />
            }) }
            { items && console.log(items) }
         </div>
      </div>
   )
}

export default MenuGrid;