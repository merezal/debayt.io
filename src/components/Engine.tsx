import React from 'react';
import Bubble from './Bubble';
import Modal from './Modal';
import Uuid from 'uuid'
import ReactDOM from 'react-dom';

interface EngineState{
    running: string;
}
interface Bubble_Content {
    id: string,
    text: string,
    visible: boolean,
}

let Engine: React.FC = () => {

    //Content:
    //This will be the object that holds an argument, as well as tracking id.
    let Content: [Bubble_Content] = [{
        id: Uuid.v4(),
        text: "Here's the argument",
        visible: false,
    }]
    //createContent
    //This function will be used to update Content, updating it with a
    function createContent(a: string) {
        let insert;
        if (a) {
            insert = a;
        }
        else {
            insert = "Here's the argument";
        }
        Content.push({ id: Uuid.v4(), text: insert, visible: false, })
        return
    }/* When targeter is fired it changes spawns Modal or hides */
    function targeter(target_id: string) {
        if (target_id !== '0') {
            console.log("Rendering Modal");
            ReactDOM.render(< Modal target_uuid={target_id} />, document.getElementById('root'))
        }
    }
    /* Renders all the Bubbles in the Content[] */
    function renderBubbles(Content: [Bubble_Content]) {
        createContent("Hooray");
        createContent("Hoo");
        let Elements = [];
        for (let i = 0; i < Content.length; i++) {
            Elements.push(<Bubble key={Content[i].id} content={Content[i]} targeter={(targeter)} />)
            console.log(Content[i].id, " : ", Content[i].text)
        }
        return Elements;
    }
    return (
        //console.log(this.props);
        //<Bubble content={Content.content} />
        <div className="Container">
            { renderBubbles(Content) }
        </div>     
        /* This is the [hidden] modal backdrop, where you input the text*/
        /* Boolean visible value determines visibility */
    );
}

export default Engine;
