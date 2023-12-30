
import React from 'react';
import { FaLongArrowAltDown, FaLongArrowAltUp } from 'react-icons/fa';

function Example1(props) {

    return (
        <div className='col-md-4 mb-4'>
            {/* <tr>
                <td>{props.symbol}</td>
                <td>{props.dayHigh}</td>
                <td>{props.dayLow}</td>
                <td>{props.change}</td>
            </tr> */}
            {/* display data in card */}

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.symbol}</h5>
                    <p className="card-text">Day High: {props.dayHigh}</p>
                    <p className="card-text">Day Low: {props.dayLow}</p>
                    <p className="card-text">Change: <span className={props.change > 0 ? 'badge bg-success' : 'badge bg-danger'}>{props.change} {props.change > 0 ? <FaLongArrowAltUp /> : <FaLongArrowAltDown />}</span></p>
                </div>
            </div>
        </div>
    );
}

export default Example1;