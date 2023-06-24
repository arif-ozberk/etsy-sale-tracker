import React, { useState } from 'react';

import ControlPanel from './components/ControlPanel';
import Sales from './components/Sales';

import './App.css';


function App() {

    //MAIN PROPS FOR CONTROL PANEL
    const [productName, updateProductName] = useState("");

    const [etsyLink, updateEtsyLink] = useState("");

    const [printifyLink, updatePrintifyLink] = useState("");

    const [quantityValue, updateQuantityValue] = useState("");

    const [sizeValue, updateSizeValue] = useState("");

    const [colorValue, updateColorValue] = useState("");

    const [totalValue, updateTotalValue] = useState("");

    const [costValue, updateCostValue] = useState("");

    const [balanceValue, updateBalanceValue] = useState("");

    const [dateValue, updateDateValue] = useState("");

    const [orderNoValue, updateOrderNoValue] = useState("");

    //CHECKBOX SWITCH STATES
    const [checkboxTrackState, switchCheckboxTrackState] = useState(false);
    const [checkboxCircleState, switchCheckboxCircleState] = useState(false);

    //CURRENT SALE INFO
    let currentSaleInfo = {
        productNameInfo: productName,
        etsyLinkInfo: etsyLink,
        printifyLinkInfo: printifyLink,
        quantityValueInfo: quantityValue,
        sizeValueInfo: sizeValue,
        colorValueInfo: colorValue,
        totalValueInfo: totalValue,
        costValueInfo: costValue,
        balanceValueInfo: balanceValue,
        dateValueInfo: new Date(dateValue),
        orderNoValueInfo: orderNoValue,
        isInternational: checkboxTrackState
    }

    const [salesLibrary, appendSalesLibrary] = useState([]);

    
    return (
        <div className="main-container">
            <h1 className='main-heading'>Etsy Sale Tracker</h1>
            <ControlPanel
                checkboxTrackState={checkboxTrackState} 
                switchCheckboxTrackState={switchCheckboxTrackState}
                checkboxCircleState={checkboxCircleState}
                switchCheckboxCircleState={switchCheckboxCircleState}
                productName={productName}
                updateProductName={updateProductName} 
                etsyLink={etsyLink}
                updateEtsyLink={updateEtsyLink}
                printifyLink={printifyLink}
                updatePrintifyLink={updatePrintifyLink}
                quantityValue={quantityValue}
                updateQuantityValue={updateQuantityValue}
                sizeValue={sizeValue}
                updateSizeValue={updateSizeValue}
                colorValue={colorValue}
                updateColorValue={updateColorValue}
                totalValue={totalValue}
                updateTotalValue={updateTotalValue}
                costValue={costValue}
                updateCostValue={updateCostValue}
                balanceValue={balanceValue}
                updateBalanceValue={updateBalanceValue}
                dateValue={dateValue}
                updateDateValue={updateDateValue}
                orderNoValue={orderNoValue}
                updateOrderNoValue={updateOrderNoValue}
                currentSaleInfo={currentSaleInfo}
                salesLibrary={salesLibrary}
                appendSalesLibrary={appendSalesLibrary}
            />
            <Sales salesLibrary={salesLibrary} appendSalesLibrary={appendSalesLibrary} />
        </div>
    );
}

export default App;
