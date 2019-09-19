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

    //Visibility of Modal
    const [visibility, setVis]=useState(false);
    //Target Bubble ID passed to Modal
    const [targetID, setTID]=useState("");

    //TEMPORARY needed to rerender after each changeContent call
    const [TEMP_updates, upTEMP]=useState(0);

    //This will be the object that holds an argument, as well as tracking id.
    const [Content, accessContent] = useState(TEST)

    //Amount of rows
    const [rows, changeRows]=useState(Content.length);

    //This function will be used to update Content, updating it with 'a'
    /* function createContent(a: string) {
        let insert;
        if (a) {
            insert = a;
        }
        else {
            insert = "Here's the argument";
        }
        Content.push({ id: Uuid.v4(), text: insert, type: "premise", })
        return;
    } */
    
    /* FIX ME updates Content based on id and new string*/
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
        //Without this Engine will not rerender until modal close
        //upTEMP(TEMP_updates + 1)

    }



    /*FIXME*/
    /* Called on click, add content entry to Content with createContent... */
/*     function addContentEntry(e: any) {
        createContent(" ");
        targeter(Content[Content.length-1].id);
    } */

    /* When targeter is fired it changes spawns Modal or hides */
    function targeter(target_id: string) {
        setTID(target_id);
        console.log("Set target", targetID);
        setVis(true);
    }
    
    function closeModal(){
        setTID("");
        setVis(false);
    }

    /* Renders all the Bubbles in the Content[] */
    function renderBubbles(Content: [Bubble_Content]) {
        //createContent("Hooray");
        //createContent("Hoo");
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
            {visibility ? < Modal target_uuid={targetID} content_array={Content} changeContent={changeContent} close={closeModal} /> : null}
        </div>     
    );
}

export default Engine;
