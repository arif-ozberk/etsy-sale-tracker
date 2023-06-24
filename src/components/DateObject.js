import React from 'react';

import "../styles/DateObject.css"

const DateObject = ({saleInfo}) => {

    return (
        <div className='date-object'>
            <h4>{saleInfo.dateValueInfo.toLocaleString("en-us", { month: "long" })}</h4>
            <h2>{saleInfo.dateValueInfo.toLocaleString("en-us", { day: "2-digit" })}</h2>
            <h3>{saleInfo.dateValueInfo.getFullYear()}</h3>
        </div>
    )
}

export default DateObject;