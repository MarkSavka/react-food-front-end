import React from 'react'
import TotalItem from './Items/TotalItem'
import moneyLogo from '../../assets/img/money_icon.svg'

const TotalStatistic = () => {
    return (
        <div className="total_statistic">
            <TotalItem 
                img={moneyLogo}
                status={true}
                percent={12}
                result={12874398}
                label={"Total Revenue"}
            />
        </div>
    )
}

export default TotalStatistic
