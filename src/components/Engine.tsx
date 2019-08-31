import React from 'react';
import Bubble from './Bubble';

interface EngineState{
    running: string;
}

class Engine extends React.Component<any>{
    render(){
        //Content:
        //This will be the object that holds an argument, as well as tracking id.
        let Content: object={
            id: "x",
            argument: "Here's the argument"
        }

        console.log(this.props.status);
        return(
            <div className="Container">
                    <Bubble content={Content} />
            </div> 
        );  
    }
}

export default Engine;