import React, { useState } from 'react';

interface propTypes {
    rowCount: number;
    loadContent?: [[Bubble_Content]];
}
interface Bubble_Content {
    id: string,
    text: string,
    type: string,
}
let Argument: React.FC<propTypes> = (props) => {
    const [data, editData] = useState([[]])

    function argRows() {
        let ret = [];
        for (let i = 0; i < props.rowCount; i++) {
            ret.push(
            <div className="card-content">
                    Row {i+1}
            </div>)
        }
        console.log("RET", ret)
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