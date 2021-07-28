import React from 'react'
import TotalItem from './Items/TotalItem'

const TotalStatistic = () => {
    return (
        <div className="total_statistic">
            <TotalItem 
                img={"https://marksavka.sirv.com/jaedar-resto/Dasboard/money_icon.svg"}
                status={true}
                percent={12.48}
                result={"$18,463.00"}
                label={"Total Revenue"}
            />
            <TotalItem 
                img={"https://marksavka.sirv.com/jaedar-resto/Dasboard/order_logo.svg"}
                status={false}
                percent={28.3}
                result={"28,657"}
                label={"Total dish ordered"}
            />
            <TotalItem 
                img={"https://marksavka.sirv.com/jaedar-resto/Dasboard/customer_logo.svg"}
                status={true}
                percent={64.5}
                result={"2,398"}
                label={"Total customer"}
            />
        </div>
    )
}

export default TotalStatistic
