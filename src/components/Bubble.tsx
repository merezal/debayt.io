import React from 'react';
import './Bubble.css';
import Button from '@material-ui/core/Button';

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
        console.log("FALSE", this.state.modalState)
        this.setState({ modalState: false });
    }
    render() {
        console.log("Rendering ", this.state.modalState, " Visible");
        return (
            <div className='Thought'>

                {/* This is the text bubble that you want to change */}
                <Button variant="contained" style={{ textTransform: 'none' }} onClick={this.toggleModal}>{this.state.content}</Button>


                
            </div>
        );
    }
    public changeContent = (val: string) =>{
      console.log("Val: ", this.props.content, " to ", val);
        this.setState({ content: val });
    }
}

export default Bubble;
