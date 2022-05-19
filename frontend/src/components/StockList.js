// IMPORTS
import React, { useState, useEffect } from 'react';


// FUNCTIONAL COMPONENT
const StockList = () => {
    // VANILLA JS SECTION
    // useState section:
    const [stocks, setStocks] = useState([
        {
         name: "Apple",
         symbol: 'AAPL',
         price: '$240.45'
        },
        {
         name: "Amazon",
         symbol: 'AMZN',
         price: '$2,231.65'
        },
        {
         name: "Twitter",
         symbol: 'TWTR',
         price: '$41.97'
        },
        {
         name: "Microsoft",
         symbol: 'MSFT',
         price: '$352.85'
        }
    ]);



   // helper function section:
   // fetch request:
   const getStocks = async () => {
       try {
         const response = await fetch('http://localhost:3006/stocks');
         const jsonData = await response.json();

            setStocks(jsonData);
           
        } catch (err) {
            console.error(err.message);
        }
    }
    
    // useEffect section:
     useEffect(() => {
         getStocks();
     }, [])
    

    // JSX SECTION
  return (
    <div >
        <h2>Stock List</h2>
        <table class=" center table table-sm table-striped table-dark text-center">
            <thead>
                <tr>
                    <th scope="col">Symbol</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>  
                    <th scope="col">Options</th>  

                </tr>
            </thead>
            <tbody >
                {stocks.map(stock => (
                    <tr>
                        <td>{stock.symbol}</td>
                        <td>{stock.name}</td>
                        <td>{stock.price}</td>
                        <td> <button type="button" class="btn btn-outline-success btn-sm">edit</button>
                        <button type="button" class="btn btn-outline-danger btn-sm">Delete</button> </td>
            
                    </tr>
                ))}
            </tbody>
        </table>

        
        
        
        
        
    </div>
  )
}


export default StockList;