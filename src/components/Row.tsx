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

    /* Renders Bubbles in each row */
    function renderRow(){
        let U=[];
        if(props.row_content){
            for(let r=0;r<props.row_content.length;r++){
                U.push(<Bubble key={"bbl"+r} content={props.row_content[r]} targeter={props.targeter}/>)
            }
        }
        console.log("ROW", U)
        return U;
    }

    return(
            <div className="card-content row">
                {renderRow()}
            </div>
    );
}
export default Row;