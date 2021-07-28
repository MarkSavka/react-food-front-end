import React from 'react'

const TotalItem = ({ img, status, percent, result, label }) => {
    return(
        <div className="total_item">
            <div className="img"><img src={img}/></div>
            <div className="percent"><p data-status={status}>{percent}</p>
                {status 
                    ? <img src="https://marksavka.sirv.com/jaedar-resto/Dasboard/status_arrow_top.svg" alt="" />
                    : <img src="https://marksavka.sirv.com/jaedar-resto/Dasboard/status_arrow_down.svg" alt="" />
                }
            </div>
            <div className="result"><p>{result}</p></div>
            <div className="label"><p>{label}</p></div>
        </div>
    )
}

export default TotalItem
