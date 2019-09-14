import React from 'react';
import './Modal.css';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/styles';

interface Bubble_Content {
    id: string,
    text: string,
    visible: boolean,
}

class Modal extends React.Component<{ close: any, target_uuid: string, content_array: [Bubble_Content], changeContent: any }, { id_target: string, text: string }>{
    constructor(props: any){
        super(props);
        this.state = {
            id_target: props.target_uuid,
            text: this.getBubble(),
        };
    }
    /* Fetches the Bubble_Content, for the given id, from the Content[] array in Engine.*/
    private getBubble = () => {
        let T = this.props.content_array.filter(todo=>todo.id===this.props.target_uuid);
        console.log("FETCHED_BUB: ", T[0] );
        return T[0].text;
    }
    /* TextField change triggers update to Engine Content[] */
    private handleText = (event: React.FormEvent<HTMLInputElement>) => {
        let x = event.currentTarget.getElementsByTagName("textarea")[0].value;
        this.props.changeContent(x);
        this.setState({ text: x });
        /* TODO make live change to button text, rerendering modal? */
    }
    public toggleVis = (event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => {
        this.props.close();
    }
    render() {
            return (
                <div id="modalBlock"  >
                    <Fab color="secondary" size="small" id="closeModal" onClick={this.toggleVis.bind(this)}>X</Fab>
                    <span className="BubbleInput">
                        <TextField id="filled-textarea" className="modalInput" margin="normal" multiline label="Enter Message" variant="filled" value={this.state.text} onInput={this.handleText} onKeyUp={(e) => { if (e.key == "Escape") { this.toggleVis(e) }}} autoFocus />
                    </span>
                </div>
            );
    }
}

export default Modal;
