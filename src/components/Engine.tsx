import React from 'react';
import Bubble from './Bubble';
import Modal from './Modal';
import Uuid from 'uuid'

interface EngineState{
    running: string;
}

let Engine: React.FC = () => {

    //Content:
    //This will be the object that holds an argument, as well as tracking id.
    let Content = {
        id: "x",
        content: "Here's the argument"
    }
    void function createContent () {
        return (
            id: Uuid.v4
    }

    return (
       // console.log(this.props);
        <div className="Container">
            <Bubble content={Content.content} />

        </div>     
        {/* This is the [hidden] modal backdrop, where you input the text*/ }
        {/* Boolean visible value determines visibility */ }
        <Modal visible={this.state.modalState} changeCont={this.changeContent.bind(this)} content={this.state.content} hide={this.hideModal.bind(this)} />
    );
}

export default Engine;
