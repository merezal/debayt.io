import React, {useState} from 'react';
import './Modal.css';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';

interface Bubble_Content {
    id: string,
    text: string,
    type: string
}
interface propTypes{
    close: Function, 
    target_uuid: string, 
    content_array: Bubble_Content[][], 
    changeContent: Function, 
}

/* Textinput for editing userinput, currently rendered in Engine */
let Modal: React.FC<propTypes> = (props) => {
    
    const[id_target,changeID]=useState(props.target_uuid);
    const[text,changeText]=useState(getBubble());
    
    let blur=[document.querySelector(".card"),document.querySelector("#rowControl")];
    blur.forEach(c=>{if(c){c.classList.add("Blur")}});

    /* Fetches the Bubble_Content, for the given id, from the Content[] array in Engine.*/
    function getBubble(): string{
        let new_text= ""
        props.content_array.map(r=>r.map(
            x=>{
                if(x.id===props.target_uuid){
                    new_text=x.text;
                }
            }
        ))
        return new_text;
    }
    /* TextField change triggers update to Engine Content[] */
    function handleText(event: React.FormEvent<HTMLInputElement>){
        let x = event.currentTarget.getElementsByTagName("textarea")[0].value;
        changeText(x);
        props.changeContent(x, id_target);
    }
    function toggleVis(event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>){
        blur.forEach(c=>{if(c){c.classList.remove("Blur")}});
        props.close();
    }
    return (
        <div id="modalBlock"  >
            <Fab color="secondary" size="small" id="closeModal" onClick={toggleVis}>X</Fab>
            <span className="BubbleInput">
                <TextField id="filled-textarea" className="modalInput" multiline label="Enter Message" variant="filled" value={text} onInput={handleText} onKeyUp={(e) => { if (e.key == "Escape") { toggleVis(e) }}} autoFocus />
            </span>
        </div>
    );
}

export default Modal;
