import React, {useState} from 'react';
import './RowControl.css'

interface propTypes{
    count: number;
}

let RowControl: React.FC <propTypes> = (props) => {
    function increase(){

    }
    function decrease(){

    }

    return (
        <div id="rowControl">
            <button onClick={increase}>/\</button>
            <p>{props.count}</p>
            <button onClick={decrease}>\/</button>
        </div>
    );
}

export default RowControl;