import React from 'react';
import './RowControl.css'

interface propTypes{
    count: number;
    adjust: React.Dispatch<React.SetStateAction<number>>;
}

/* This is the control that modifies the const count in Engine, controlling the amount of rows on the card */
let RowControl: React.FC <propTypes> = (props) => {
    /* These functions modify the count */
    function increase() {
        props.adjust(props.count+1);
    }
    function decrease(){
        if (props.count > 1) {
            props.adjust(props.count-1)
        }
    }

    return (
        <div id="rowControl">
            <a id="rowInc" onClick={increase}>/\</a>
            <p>{props.count}</p>
            <a id="rowDec" onClick={decrease}>\/</a>
        </div>
    );
}

export default RowControl;