import React, { useEffect, useState } from 'react'
import SVG_arrow_down from '../../../../assets/svg/SVG_arrow_down';
import MenuItem from './MenuItem'
import getItemsRequest from '../../service/getItemsFromServer'

const MenuGrid = (props) => {
   
   const [items, setItems] = useState(undefined);
   const [style, setStyle] = useState('menu_grid_items');
   
   // setFade('fade_out');
   
   useEffect( async () => {
      setItems( await getItemsRequest() );
      props.changeFade('fade_in');
   }, [props.fade]);
   
   return (
      <div className="menu_grid">
         <div className="menu_top" >
            <p>Choose Dishes</p>
            <button>
               <SVG_arrow_down width="20px" height="10px" fill="white" />
               Dine in
            </button>
         </div>
         <div className={style + " " + props.fade} >
            { items && items.items.map(item => {
               return item.category.map(category => {
                  if(category === props.category){
                     return <MenuItem id={item.id} name={item.name} price={item.price} count={item.count} img={item.img} />
                  }
               })
            })}
         </div>
      </div>
   )
}

export default MenuGrid;