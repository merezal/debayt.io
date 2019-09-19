import React, { useState } from 'react';
import Row from './Row';

interface propTypes {
    rowCount: number,
    loadContent?: Bubble_Content[][],
    targeter: Function,
}
interface Bubble_Content {
    id: string,
    text: string,
    type: string,
}
let Argument: React.FC<propTypes> = (props) => {
    
    const [data, editData] = useState(props.loadContent)

    if(!data){
        editData(undefined)
    }

    //If argument contents are passed in pass data
    /* if(props.loadContent && data!==props.loadContent){
        editData(props.loadContent)
    } */

    
    /* Function that renders the rows of the table */
    function argRows() {
        let ret = [];
        if(data){
            for (let i = 0; i < props.rowCount; i++) {
                ret.push(
                  <Row key={"row"+i} row_content={data[i]} targeter={props.targeter}/>
                )
            }
        }
        else{
            ret.push(<Row targeter={props.targeter}/>)
        }
        return ret;
    }


    return (
        <div className="card">
            <div className="card-header">
                Topic
            </div>
            {argRows()}
        </div>
    );
}

export default Argument;