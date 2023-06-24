import React from 'react';
import DateObject from './DateObject';
import CSQObject from './CSQObject';
import MoneyObject from './MoneyObject';
import ProfitObject from './ProfitObject';

import "../styles/NewSale.css"

const NewSale = ({saleInfo, removeSaleItem, id}) => {

    let intText = saleInfo.isInternational ? "Yes" : "No";
    
    return (
        <div className='new-sale new-sale-load'>
            <DateObject saleInfo={saleInfo} />
            <div className="sale-content">
                <div className="sale-info">
                    
                    <div className="sale-info-left">
                        <p className='product-name'>{saleInfo.productNameInfo}</p>

                        <div className="product-links">
                            <a className='etsy-link' href={saleInfo.etsyLinkInfo} target='_blank'><i className='fas fa-paper-plane'></i>Etsy</a>
                            <a className='printify-link' href={saleInfo.printifyLinkInfo} target='_blank'><i className='fas fa-paper-plane'></i>Printify</a>
                            <a 
                                className='order-no-link' 
                                href={`https://www.etsy.com/your/orders/sold?ref=seller-platform-mcnav&order_id=${saleInfo.orderNoValueInfo}`} 
                                target='_blank'
                            >#{saleInfo.orderNoValueInfo}</a>
                            <p>International: {intText}</p>
                        </div>
                    </div>

                    <div className="sale-info-right">
                        <CSQObject saleInfo={saleInfo} />

                        <MoneyObject saleInfo={saleInfo} />

                        <ProfitObject saleInfo={saleInfo} />
                    </div>
                    
                    <i className='fas fa-close close-button' onClick={()=> {removeSaleItem(id)}}></i>
                </div>
            </div>
        </div>
    )
}

export default NewSale;