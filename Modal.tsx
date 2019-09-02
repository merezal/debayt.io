import React from 'react';
import './Modal.css';
import Fab from '@material-ui/core/Fab';

interface ModalSettings {
    content: string,
}

class Modal extends React.Component<{ visible: boolean, changeCont: any, content: string , hide: any},{ content: string }>{
    constructor(props: any){
        super(props);
        this.state = {
            content: props.content,
        };
    }
    public handleText(event: React.ChangeEvent<HTMLTextAreaElement>){
      this.setState(this.props.changeCont(event.target.value));
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
                        <textarea value={this.props.content} onInput={this.handleText.bind(this)}
                            cols={15} wrap="hard" ></textarea>
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
