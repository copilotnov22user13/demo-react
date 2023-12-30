// api url http://localhost:4000/stocks
// api url http://localhost:4000/stocks?symbol=MSFT

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StockData from './stock-row/stock-data';
import Example1 from './components/example-1';

function StockDataApi() {
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/stocks')
            .then((response) => {
                setStocks(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <>
            {/* <table className='table'>
         <thead>
              <tr>
                 <th>Symbol</th>
                 <th>Price</th>
                 <th>Change</th>
                 <th>% Change</th>
                 <th>Volume</th>
              </tr>         
            </thead>

            <tbody> */}
            <div className='row'>
                {stocks.map((stock) => {
                    // use api key as key
                    // return <StockData key={stock.symbol} name={stock.name} symbol={stock.symbol} price={stock.open} change={stock.change} dayHigh={stock.dayHigh} dayLow={stock.dayLow} />
                    return <Example1 key={stock.symbol} name={stock.name} symbol={stock.symbol} price={stock.open} change={stock.change} dayHigh={stock.dayHigh} dayLow={stock.dayLow} />

                })}
            </div>
            {/* </tbody>
        </table> */}





        </>
    );
}
export default StockDataApi;
