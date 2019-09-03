import React from 'react';
import Bubble from './Bubble';

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

    return (
       // console.log(this.props);
        <div className="Container">
                <Bubble content={Content.content} />
        </div>     
    );
}

export default Engine;
