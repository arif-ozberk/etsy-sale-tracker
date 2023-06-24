import React from 'react';

import "../styles/ProfitObject.css";

const ProfitObject = ({saleInfo}) => {

    let profit = Number(saleInfo.balanceValueInfo) - Number(saleInfo.costValueInfo);

    profit = profit.toFixed(2);

    let profitText = profit >= 0 ? `$${profit}` : `-$${-1 * profit}`

    let profitTextClass = profit >= 0 ? "profit" : "loss";

    return (
        <div className='profit-object'>
            <p>Profit</p>
            <h2 className={profitTextClass} >{profitText}</h2>
        </div>
    )
}

export default ProfitObject;