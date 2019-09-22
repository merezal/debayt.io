import React, { useState } from 'react';
import './Engine.css'
import Bubble from './Bubble';
import Modal from './Modal';
import Argument from './Argument';
import RowControl from './RowControl';
import Uuid from 'uuid';

interface Bubble_Content {
    id: string,
    text: string,
    type: string,
}
let TEST: Bubble_Content[][]=[[
    {id: Uuid.v4(),
    text: "Here's the argument",
    type: "premise",},
    {id: Uuid.v4(),
    text: "argument",
    type: "premise",},
],[    {id: Uuid.v4(),
    text: "Here's the fudge",
    type: "premise",},
    {id: Uuid.v4(),
    text: "Dargument",
    type: "premise",}],]


let Engine: React.FC = (props) => {

    // Visibility of Modal
    const [visibility, setVis]=useState(false);
    // Target Bubble ID passed to Modal
    const [targetID, setTID]=useState("");
    // This will be the object that holds an argument, as well as tracking id.
    const [Content, accessContent] = useState(TEST)
    // Amount of rows
    const [rows, changeRows]=useState(Content.length);

    /* creates new content within the row of bubble id in precedent */
    function createContent(precedent: string) {
        let j
        for (let r = 0; r < Content.length; r++) {
            for (let c = 0; c < Content[r].length; c++) {
                if (Content[r][c].id === precedent) {
                    j = r;

                    c = Content[r].length - 1;
                    r = Content.length - 1;      
                }
            }
        }
        if (j===0 || j) {
            let new_id = Uuid.v4();
            let Update = Content;
            Update[j].push({ id: new_id, text: "Enter Content", type: "premise", })
            accessContent(Update);
        }
    }
    
    /* updates Content based on id and new string */
    function changeContent(txt: string, id: string) {
        let Update = Content.map(r=>{return r.map(
            x=>{
                if(x.id===id){
                    x.text=txt;
                    return x;
                }
                else{
                    return x;
                }
            }
        )})

        accessContent(Update as [[Bubble_Content]]);
    }

    /* When targeter is fired it changes spawns Modal or hides */
    function targeter(target_id: string) {
        setTID(target_id);
        console.log("Set target:", target_id);
        setVis(true);
    }
    
    function closeModal(){
        setTID("");
        setVis(false);
    }

    /* Renders all the Bubbles in the Content[] */
    function renderBubbles(Content: [Bubble_Content]) {
        let Elements = [];
        for (let i = 0; i < Content.length; i++) { 
            Elements.push(<Bubble key={Content[i].id} content={Content[i]} targeter={targeter} />)
        }
        return Elements;
    }

    function addButtonClass() {
        if (!visibility) {
            return ("is-primary");
        }
        else {
            return ("is-primary is-loading");
        }
    }
    return (
        <div id="engineArea">
            <Argument rowCount={rows} loadContent={Content} targeter={targeter}/>
{/*             <button id="newItem" className={"button " + addButtonClass()} onClick={addContentEntry} >+</button>
 */}            <RowControl count={rows} adjust={changeRows} />
            {visibility ? < Modal target_uuid={targetID} content_array={Content} changeContent={changeContent} createContent={createContent} close={closeModal} /> : null}
        </div>     
    );
}

export default Engine;
