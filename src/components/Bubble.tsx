import React, { useState, useEffect } from 'react';
import './Bubble.css';
import Button from '@material-ui/core/Button';

interface Bubble_Content {
    id: string,
    text: string,
    type: string,
}

interface propTypes{
    content: Bubble_Content,
    targeter: Function,
}

/* Container for user content, changes through modal on click */
let Bubble: React.FC<propTypes> = (props) => {
    const[id, editID] = useState(props.content.id)
    const[text, editText]=useState(props.content.text)

    /* Triggers modal and passes click Bubble id */
    function toggleModal(event: any) {
        props.targeter( props.content.id );
    }
    return (
        <div id={props.content.id} className='Thought'>
            {/* This is the text bubble that you want to change */}
            <Button variant="contained" style={{ textTransform: 'none' }} onClick={toggleModal}>{props.content.text}</Button>
        </div>
    );
}

export default Bubble;
