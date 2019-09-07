import React from 'react';
import './Modal.css';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import Bubble from './Bubble';


interface typ_bubble {
    text: string,
    change: object,
}


class Modal extends React.Component<{ target_uuid: string }, { Cubble: any, content: string | null, id_target: string }>{
    constructor(props: any){
        super(props);
        this.state = {
            Cubble: this.getBubble(),
            content: this.getContent(),
            id_target: props.target_uuid,
        };
    }
    /* Function fetch content from id*/
    private getBubble = () => {
        let T = document.getElementById(this.props.target_uuid);
        if (T === null) {
            return "!Target Not Found!";
        }
        else {
            return T;
        }
    }
    private getContent = () => {
        let C = document.getElementById(this.props.target_uuid) as Bubble | null ;
        if (C === null) {
            return ("!Error NO TARGET!");
        }
        else {
            return C.state.text;
        }
    }

    private handleText = (event: React.FormEvent<HTMLInputElement>) => {
        let x = event.currentTarget.getElementsByTagName("textarea")[0].value;
        console.log("SENDING: ", x);
        /* Target base input in Materialui styling */
        x = this.state.Cubble.changeContent(x);
        /* TODO make request to update server */

    }
    public toggleVis = (event: React.MouseEvent<HTMLElement>) => {
        console.log("Toggling Visibility", event.target);
        /* FIXME Toggle visibility or remove from DOM */
        this.state.Cubble.hideModal(event);
    }
    render() {
        /* FIXME get visibility from content*/
        //if (this.state.Cubble.modalState) {
            console.log("MODAL");
            return (
                <div id="modalBlock"  >
                    <Fab color="secondary" size="small" id="closeModal" onClick={this.toggleVis.bind(this)}>X</Fab>
                    <span className="BubbleInput">
                        <TextField id="filled-textarea" margin="normal" multiline label="Enter Message" variant="filled" value={this.state.Cubble.text} onInput={this.handleText} autoFocus />
                    </span>
                </div>
            );
        /*
        else {
            return (
                <div id="modalBlock" style={{ visibility: 'hidden' }}>
                </div>
            );            
        }*/
    }
}

export default Modal;
