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
                U.push(<Bubble key={"bbl" + r} content={RowContent[r]} targeter={props.targeter} />)
            }
        }
        
        return U;
    }

    /* TODO get Bubble position with .getBoundingClientRect & connect svg between bubbles
     <svg width="" height=""><line x1="" y1="" x2="" y2="" stroke="black"/></svg>
     
     */

    return(
            <div className="card-content row">
                {renderRow()}
            </div>
    );
}
export default Row;