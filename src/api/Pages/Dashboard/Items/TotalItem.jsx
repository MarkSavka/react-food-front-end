import React from 'react'

const TotalItem = ({ img, status, percent, result, label }) => {
    return(
        <div className="total_item">
            <div className="percent">
                <img src={img} />
            </div>
        </div>
    )
}

export default TotalItem
