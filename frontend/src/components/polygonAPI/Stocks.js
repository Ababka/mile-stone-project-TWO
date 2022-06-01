// IMPORTS
import React from 'react';


// FUNCTIONAL COMPONENT
const Stocks = ( { symbol, price } ) => {
  // VANILLA JS SECTION

    // helper function (add to table when onClick)
    const onSubmitForm = async(e) => {
        e.preventDefault();
        try {
          const body = { symbol, price };
          await fetch("http://localhost:3006/stocks", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
        
            window.location = '/';
    
          } catch (err) {
            console.error(err.message)
          }
        };    
        

  // JSX SECTION
  return (
    <div className="stock-container">
        
        <div style={{display: 'flex'}} className="stock-row" >
          <div className="stock">
            <p className="stock-symbol" onClick={onSubmitForm}>{symbol}</p>
          </div>
          <div className="stock-data">
            <p className="stock-price" onClick={onSubmitForm}>${price}</p>
          </div>
        </div>

    </div>
  )
}

export default Stocks;