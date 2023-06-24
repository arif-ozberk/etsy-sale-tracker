import React from 'react';
import NewSale from './NewSale';

import "../styles/Sales.css";

const Sales = ({salesLibrary, appendSalesLibrary}) => {

    const removeSaleItem = (id) => {
        appendSalesLibrary(salesLibrary.filter((saleItem, index) => index !== id))
    }

    return (
        <div className='sales-container'>
            {salesLibrary.map((item, index) => (
                <NewSale id={index} key={index} saleInfo={item} removeSaleItem={removeSaleItem} />
            ))}
        </div>
    )
}

export default Sales;