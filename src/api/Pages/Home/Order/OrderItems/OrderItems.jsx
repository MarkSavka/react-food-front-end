import React, { useEffect, useState } from 'react';
import SVG_delete from '../../../../assets/svg/SVG_delete'

const OrderItems = ({ img, name, price }) => {
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
        <div className="items_grid">
            <img src={img} alt="logo" className="logo" />
            <div className="text">
                <p>{name}</p>
            </div>
            <input 
                className="count"
                type="number"
                value={inputCount}
                onChange={ (e) => {inputCountValidator(e.target.value)}} 
            />
            <p className="price">{price}</p>
            <input className="comment" type="text" placeholder="U can add a comment" />
            <div className="delete" >
                <SVG_delete onClick={() => {}} />
            </div>
        </div>
    )
}

export default OrderItems ;
