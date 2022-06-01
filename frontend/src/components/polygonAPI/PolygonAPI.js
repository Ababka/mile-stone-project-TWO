// IMPORTS
import React, { useState, useEffect } from 'react';
import Stocks from './Stocks';

// FUNCTIONAL COMPONENT
const PolygonAPI = () => {
// VANILLA JS SECTION

    // useState section
    const [stocks, setStocks] = useState([]);
    // const [search, setSearch] = useState('');

    
// HELPER FUNCTION SECTION
    // polygon api fetch request:
    const polygonApi = async () => {
        try {
            const response = await fetch(
            `https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2022-05-23?adjusted=true&apiKey=KcdzRHM5pcd6apVHZ71g00TSMXc89CUh`
            );
            const jsonData = await response.json();
            
            console.log(response)
            
            setStocks(jsonData.results);
            
            console.log(jsonData.results);

        } catch (err) {
            console.error(err.message);
        }
    }


// useEffect section
    useEffect(() => {
    polygonApi();
    }, [])



    // helper function
    // const handleChange = (e) => {
    //     setSearch(e.target.value)
    // }

    // const filteredStocks = stocks.filter(stock => stock.T.toLowerCase().includes(search.toLowerCase()))


// JSX SECTION
  return (
    <div style={{color: 'white', display: 'flex', flexDirection: 'column'}} className="stock-app">
        <h3>Search a Stock from API</h3>
            <div className="searchInput">
                <input type="text" placeholder='Enter Stock Symbol Here...'></input>
            </div>
            <div style={{display: 'flex', alignItems: 'flex-end'}} className='resultBoxPlusDisclaimer'>
                <div className="dataResult">
                    {stocks.map(stock => {
                        return (
                            <Stocks key={stock.T} symbol={stock.T} price={stock.c} />
                        )
                    })}
                </div>
            </div>
    </div>
    
  )
}


export default PolygonAPI;