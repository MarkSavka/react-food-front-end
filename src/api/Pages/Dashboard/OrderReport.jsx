import React, { useEffect, useState } from 'react'
import getTurn from '../../service/getTurn'

const OrderReport = () => {

    const [turn, setTurn] = useState(null)
    const [indexColor, setIndexColor] = useState(0)

    const upperCase = (str) => {
        return str[0].toUpperCase() + str.slice(1)
    }

    useEffect( () => {
        getTurn()
            .then(res => setTurn(res))
    }, [])

    return(
        <div className="order_report">
            <div className="order_header">
                <h2>Order Report</h2>
                <button>Filter Order</button>
            </div>
            <div className="order_content">
                <div className="order_item order_main_item">
                    <p>Customer</p>
                    <p>Menu</p>
                    <p>Total Payment</p>
                    <p>Status</p>
                </div>
                <hr />
                {turn && turn.map(item => {
                    return (
                        <div className="order_item">
                            <div className="customer">
                                <img src={item.img} width="40px" data-index={Math.floor(Math.random() * 6)} />
                                <p>{item.nickname}</p>
                            </div>
                            <p>{item.menu}</p>
                            <p>{item.totalPrice}</p>
                            <div data-status={item.status}>{ upperCase(item.status) }</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default OrderReport
