import React from "react";

const StockData = (props) => {

    return (
        <tr>
            <td>{props.symbol}</td>
            <td>{props.price}</td>
            <td>{props.change}</td>
            <td>{props.dayHigh}</td>
            <td>{props.dayLow}</td>
        </tr>
    )
}
export default StockData;