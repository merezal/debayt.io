import React from 'react';
import './Bubble.css';
import Button from '@material-ui/core/Button';
/*
interface Bubble{
    content: string,
    modalState: boolean,
}
*/
interface Bubble_Content {
    id: string,
    text: string,
    visible: boolean,
}
interface Bubble_Props{
    content: Bubble_Content,
    targeter: any
}

class Bubble extends React.Component<{ content: Bubble_Content, targeter: any }, { id: string, text: string, modalState: boolean }> {
    constructor(props: any){
        super(props);
        this.state={
            id: props.content.id,
            text: props.content.text,
            modalState: props.content.visible, 
        };
    }
    /*
    componentDidUpdate(prevProps: Bubble_Props){
        console.log(prevProps.content.text, "===", this.state.text)
        if(prevProps.content.text!==this.props.content.text){
            this.setState({text: this.props.content.text})
        }
    } !SOMEHOW MUST RERENDER WHEN CONTENT UPDATES!  */
    /*FIXME*/
    toggleModal = (event: any) => {
        this.props.targeter( this.props.content.id );
    }
    render() {
        console.log("Rendering ", this.state.modalState, " Visible");
        return (
            <div className='Thought'>

                {/* This is the text bubble that you want to change */}
                <Button variant="contained" style={{ textTransform: 'none' }} onClick={this.toggleModal}>{this.props.content.text}</Button>
            </div>
        );
    }

}

export default Bubble;
