import React from 'react';

import "../styles/MoneyObject.css";

const MoneyObject = ({saleInfo}) => {

    return (
        <div className='money-object'>
            <div className="total">
                <p>Total</p>
                <h2>${saleInfo.totalValueInfo}</h2>
            </div>
            <div className="cost">
                <p>Cost</p>
                <h2>${saleInfo.costValueInfo}</h2>
            </div>
            <div className="balance">
                <p>Balance</p>
                <h2>${saleInfo.balanceValueInfo}</h2>
            </div>
        </div>
    )
}

export default MoneyObject;