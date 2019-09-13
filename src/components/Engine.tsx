import React, { useState } from 'react';
import Bubble from './Bubble';
import Modal from './Modal';
import Uuid from 'uuid';

interface Bubble_Content {
    id: string,
    text: string,
    visible: boolean,
}

let Engine: React.FC = (modal_state) => {

    //Visibility of Modal
    const [visibility, setVis]=useState(false);
    //Target Bubble ID passed to Modal
    const [targetID, setTID]=useState("");

    //This will be the object that holds an argument, as well as tracking id.
    const [Content, accessContent] = useState([{
        id: Uuid.v4(),
        text: "Here's the argument",
        visible: false,
    }] as [Bubble_Content])

    //This function will be used to update Content, updating it with 'a'
    function createContent(a: string) {
        let insert;
        if (a) {
            insert = a;
        }
        else {
            insert = "Here's the argument";
        }
        Content.push({ id: Uuid.v4(), text: insert, visible: false, })
        return;
    }
    
    /* FIX ME updates Content based on id and new string*/
    function changeContent(b: string) {
        let Z = Content.findIndex(e=>e.id===targetID);
        let Update = Content;
        Update[Z].text=b;
        accessContent(Update);
        console.log("Updated", Update);
        return;
    }

    /* When targeter is fired it changes spawns Modal or hides */
    function targeter(target_id: string) {
        setTID(target_id);
        console.log("Set target", targetID)
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
            Elements.push(<Bubble key={Content[i].id} content={Content[i]} targeter={(targeter)} />)
        }
        return Elements;
    }

    return (
        //console.log(this.props);
        //<Bubble content={Content.content} />
        <div className="Container">
            { renderBubbles(Content) }
            { visibility ? < Modal target_uuid={targetID} content_array={Content} changeContent={changeContent} close={closeModal}/>:null}
        </div>     
    );
}

export default Engine;
