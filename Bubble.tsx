import React from 'react';
import './Bubble.css';
import Button from '@material-ui/core/Button';
import Modal from './Modal';

interface ContMan{
    content: string,
    modalState: boolean,
}

class Bubble extends React.Component<{ content: string }, {content:string, modalState: boolean}> {
      constructor(props: any){
        super(props);
        this.state={
            content: props.content,
            modalState: false, 
        };
    }
    /*FIXME*/
    toggleModal = (event: any) => {
        this.setState({ modalState: true });
    }
    hideModal = (event: any) => {
        this.setState({ modalState: false });
    }
    render() {
        console.log("Rendering ", this.state.modalState, " Visible");
        return (
            <div className='Thought'>

                {/* This is the text bubble that you want to change */}
                <Button variant="contained" style={{ textTransform: 'none' }} onClick={this.toggleModal}>{this.state.content}</Button>

                {/* This is the [hidden] modal backdrop, where you input the text*/}
                {/* Boolean visible value determines visibility */}
                <Modal visible={this.state.modalState} changeCont={this.changeContent.bind(this)} content={this.state.content} hide={this.hideModal.bind(this)} />
                
            </div>
        );
    }
    public changeContent = (val: string) =>{
      console.log("Val: ", this.props.content, " to ", val);
        this.setState({ content: val });
        this.render();
    }
}

export default Bubble;
