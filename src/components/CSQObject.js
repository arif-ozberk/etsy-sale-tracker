import React from 'react';

import "../styles/CSQObject.css";

const CSQObject = ({saleInfo}) => {

    return (
        <div className="color-size-quantity">
            <div className="quantity">
                <p>Quantity</p>
                <h2>{saleInfo.quantityValueInfo}</h2>
            </div>
            <div className="size">
                <p>Size</p>
                <h2>{saleInfo.sizeValueInfo}</h2>
            </div>
            <div className="color">
                <p>Color</p>
                <h2>{saleInfo.colorValueInfo}</h2>
            </div>
        </div>
    )
}

export default CSQObject;