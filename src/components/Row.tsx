import React, { useState } from 'react';
import Bubble from './Bubble';
import './Row.css';

interface propTypes{
    row_content?: Bubble_Content[],
    targeter: Function,

}
interface Bubble_Content {
    id: string,
    text: string,
    type: string,
}
/* This component is rendered for each argument row and contains bubbles */
let Row: React.FC<propTypes> = (props) => {

    const [RowContent, accessRow] = useState();

    if (props.row_content !== RowContent) {
        accessRow(props.row_content)
    }

    /* Renders Bubbles in each row */
    function renderRow(){
        let U = [];
        if (RowContent) {
            for (let r = 0; r < RowContent.length; r++) {
                U.push(<Bubble key={RowContent[r].id} content={RowContent[r]} targeter={props.targeter} />)
            }
        }
        
        return U;
    }

    /* TODO get Bubble position with .getBoundingClientRect & connect svg between bubbles
     <svg width="" height=""><line x1="" y1="" x2="" y2="" stroke="black"/></svg>
     
     */
    function connectRow() {
        if (RowContent) {
            let lines = [];
            for (let B = 0; B < RowContent.length - 1; B++) {
                let B1 = document.getElementById("#" + RowContent[B].id);
                let B2 = document.getElementById("#" + RowContent[B + 1].id);
                console.log("b1", B1);
                console.log("b2", B2);

                if (B1 && B2) {
                    lines.push(
                        <svg width="100px" height="100px"><line x1={B1.getBoundingClientRect().left} y1={B1.getBoundingClientRect().top} x2={B2.getBoundingClientRect().left} y2={B2.getBoundingClientRect().top} stroke="black" /></svg>
                    )
                }
            }
            console.log("LINES", lines)
            return lines;
        }
        console.log("PASSED");
    }

    /*
     
     Can't find getElementById 
     fix this
     
     */


    return(
            <div className="card-content row">
            {renderRow()}
            {connectRow()}
            </div>
    );
}
export default Row;