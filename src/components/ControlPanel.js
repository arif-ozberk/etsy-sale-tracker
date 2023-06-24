import React, { useState } from 'react';

import "../styles/ControlPanel.css";

const ControlPanel = ({
    checkboxTrackState, checkboxCircleState, switchCheckboxTrackState, switchCheckboxCircleState,
    productName, updateProductName, etsyLink, updateEtsyLink, printifyLink, updatePrintifyLink,
    quantityValue, updateQuantityValue, sizeValue, updateSizeValue, colorValue, updateColorValue,
    totalValue, updateTotalValue, costValue, updateCostValue, balanceValue, updateBalanceValue,
    dateValue, updateDateValue, orderNoValue, updateOrderNoValue, currentSaleInfo,
    salesLibrary, appendSalesLibrary,
}) => {


    //CHECKBOX HANDLER FUNCTION
    let checkboxTrackActiveClass = checkboxTrackState ? "checkbox-track-active" : "";
    let checkboxCircleActiveClass = checkboxCircleState ? "checkbox-circle-active" : "";

    const handleCheckboxClass = () => {
        switchCheckboxTrackState(checkboxTrackState => !checkboxTrackState);
        switchCheckboxCircleState(checkboxCircleState => !checkboxCircleState);
    }

    //PRODUCT NAME STATE UPDATE
    const handleProductNameChange = (event) => {
        updateProductName(event.target.value);
    }

    //ETSY LINK STATE UPDATE
    const handleEtsyLinkChange = (event) => {
        updateEtsyLink(event.target.value);
    }

    //PRINTIFY LINK STATE
    const handlePrintifyLinkChange = (event) => {
        updatePrintifyLink(event.target.value);
    }

    //QUANTITY STATE
    const handleQuantityChange = (event) => {
        updateQuantityValue(event.target.value);
    }

    //SIZE STATE
    const handleSizeChange = (event) => {
        updateSizeValue(event.target.value);
    }

    //COLOR STATE
    const handleColorChange = (event) => {
        updateColorValue(event.target.value);
    }

    //TOTAL STATE
    const handleTotalChange = (event) => {
        updateTotalValue(event.target.value);
    }

    //COST STATE
    const handleCostChange = (event) => {
        updateCostValue(event.target.value);
    }

    //BALANCE STATE
    const handleBalanceChange = (event) => {
        updateBalanceValue(event.target.value);
    }

    //DATE STATE
    const handleDateChange = (event) => {
        updateDateValue(event.target.value);
    }

    //ORDER NO STATE
    const handleOrderNoChange = (event) => {
        updateOrderNoValue(event.target.value);
    }

    //HANDLE ADD NEW SALE BUTTON FUNCTION
    const handleAddButton = () => {
        for(let infoItem of Object.values(currentSaleInfo)) {
            if(infoItem.length == 0) {
                alert("Don't leave empty spaces!")
                return
            }
        }

        appendSalesLibrary(prev => [...prev, currentSaleInfo]);
    }


    return (
        <div className='control-panel'>
            <div className="control-panel-container product-info">
                <i className='fa-solid fa-circle-info'></i>
                <div>
                    <label>Product Name</label>
                    <input value={productName} onChange={handleProductNameChange} type="text" className='name-input' />
                </div>
                <div>
                    <label>Etsy Link</label>
                    <input value={etsyLink} onChange={handleEtsyLinkChange} type="text" className='etsy-input' />
                </div>
                <div>
                    <label>Printify Link</label>
                    <input value={printifyLink} onChange={handlePrintifyLinkChange} type="text" className='printify-input' />
                </div>
            </div>

            <div className="control-panel-container product-specs">
                <i className='fa-solid fa-filter'></i>
                <div>
                    <label>Quantity</label>
                    <input value={quantityValue} onChange={handleQuantityChange} type="number" />
                </div>
                <div>
                    <label>Size</label>
                    <input value={sizeValue} onChange={handleSizeChange} type="text" />
                </div>
                <div>
                    <label>Color</label>
                    <input value={colorValue} onChange={handleColorChange} type="text" />
                </div>
            </div>

            <div className="control-panel-container product-numbers">
                <i className='fa-solid fa-money-bill'></i>
                <div>
                    <label>Total</label>
                    <input value={totalValue} onChange={handleTotalChange} type="number" />
                </div>
                <div>
                    <label>Cost</label>
                    <input value={costValue} onChange={handleCostChange} type="number" />
                </div>
                <div>
                    <label>Balance</label>
                    <input value={balanceValue} onChange={handleBalanceChange} type="number" />
                </div>
            </div>

            <div className="control-panel-container product-other">
                <i className='fa-solid fa-calendar-days'></i>
                <div>
                    <label>Date</label>
                    <input value={dateValue} onChange={handleDateChange} type="date" />
                </div>
                <div>
                    <label>Order No</label>
                    <input value={orderNoValue} onChange={handleOrderNoChange} type="text" />
                </div>
                <div>
                    <label>International</label>
                    <div onClick={handleCheckboxClass} className={`checkbox-track ${checkboxTrackActiveClass}`}>
                        <div className={`checkbox-circle ${checkboxCircleActiveClass}`}></div>
                    </div>
                </div>
            </div>

            <button onClick={handleAddButton} className='add-button'>Add</button>
        </div>
    )
}

export default ControlPanel;