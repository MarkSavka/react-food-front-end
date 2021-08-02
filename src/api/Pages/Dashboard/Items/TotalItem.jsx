import React from 'react'

const TotalItem = ({ img, status, percent, result, label }) => {
    return(
        <div className="total_item">
            <div className="img"><img src={img} alt="logo"/></div>
            <div className="percent"><p data-status={status}>{percent}</p>
                {status 
                    ? <img src="https://marksavka.sirv.com/jaedar-resto/Dasboard/status_arrow_top.svg" alt="arrow_top" />
                    : <img src="https://marksavka.sirv.com/jaedar-resto/Dasboard/status_arrow_down.svg" alt="arrow_down" />
                }
            </div>
            <div className="result"><p>{result}</p></div>
            <div className="label"><p>{label}</p></div>
        </div>
    )
}

export default TotalItem
