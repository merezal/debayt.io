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
      editContent = () => {
              console.log("Visible: ", this.state.modalState)
              this.setState({ modalState: !this.state.modalState })
      }
      render(){

          let toggleVisibility = (bool: boolean) => {
              if (bool) {
                console.log("Rendering styles")
                  return {
               
                }
            }
            else{
                return{
              
                }
            }
        }
        return(
            <div className='Thought'>

                {/* This is the text bubble that you want to change */}
                <Button variant="contained" style={{ textTransform: 'none' }} onClick={this.editContent}>{this.state.content}</Button>

                {/* This is the [hidden] modal backdrop, where you input the text*/}
                <Modal changeCont={this.changeContent.bind(this)} content={this.state.content} style={toggleVisibility(this.state.modalState) as React.CSSProperties} />
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
