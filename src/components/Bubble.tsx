import React from 'react';
import './Bubble.css';
import Button from '@material-ui/core/Button';

interface Bubble{
    content: string,
    modalState: boolean,
}
interface Bubble_Content {
    id: string,
    text: string,
    visible: boolean,
}

class Bubble extends React.Component<{ content: Bubble_Content, targeter: any }, { id: number, text: string, modalState: boolean }> {
    constructor(props: any){
        super(props);
        this.state={
            id: props.content.id,
            text: props.content.text,
            modalState: props.content.visible, 
        };
    }
    /*FIXME*/
    toggleModal = (event: any) => {
        this.setState({ modalState: true });
        this.props.targeter( this.state.id );
    }
    hideModal = (event: any) => {
        console.log("FALSE", this.state.modalState)
        this.setState({ modalState: false });
    }
    public changeContent = (val: string) => {
        console.log("Val: ", this.props.content, " to ", val);
        this.setState({ text: val });
        return 1;
    }
    render() {
        console.log("Rendering ", this.state.modalState, " Visible");
        return (
            <div className='Thought'>

                {/* This is the text bubble that you want to change */}
                <Button variant="contained" style={{ textTransform: 'none' }} onClick={this.toggleModal}>{this.state.text}</Button>
            </div>
        );
    }

}

export default Bubble;
