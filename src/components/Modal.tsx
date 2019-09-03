import React from 'react';
import './Modal.css';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';

interface ModalSettings {
    content: string,
    value: string,
}

class Modal extends React.Component<{ visible: boolean, changeCont: any, content: string , hide: any},{ content: string }>{
    constructor(props: any){
        super(props);
        this.state = {
            content: props.content,
        };
    }
    public handleText = (event: React.FormEvent<HTMLInputElement>) => {
        let x = event.currentTarget.getElementsByTagName("textarea")[0].value;
        console.log("SENDING: ", x);
        /* Target base input in Materialui styling */
        this.props.changeCont(x);
        /* TODO make request to update server */

    }
    public toggleVis = (event: React.MouseEvent<HTMLElement>) => {
        console.log("Toggling Visibility", event.target);
        this.props.hide(event);
    }
    render() {
        if (this.props.visible) {
            console.log("MODAL");
            return (
                <div id="modalBlock"  >
                    <Fab color="secondary" size="small" id="closeModal" onClick={this.toggleVis.bind(this)}>X</Fab>
                    <span className="BubbleInput">
                        <TextField id="filled-textarea" margin="normal" multiline label="Enter Message" variant="filled" value={this.props.content} onInput={this.handleText} autoFocus />
                    </span>
                </div>
            );
        }
        else {
            return (
                <div id="modalBlock" style={{ visibility: 'hidden' }}>
                </div>
            );            
        }
    }
}

export default Modal;
