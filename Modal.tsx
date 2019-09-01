import React from 'react';

class Modal extends React.Component<{changeCont:any, content: string, style: React.CSSProperties}>{
    constructor(props: any){
      super(props);
        this.state = {
            content: this.props.content,
        }
      console.log("Modal Props", this.props);
      console.log("Modal States", this.state);
    }
    public handleText(event: any){
      console.log("HANDLETEXT!: ",this.state);
      this.setState(this.props.changeCont(event.target.value));
      console.log("this.props.content:",this.props.content);
    }
    render(){
        return(
            <div className="modalBlock">
             <input className="BubbleInput" type="text" value={this.props.content} onChange={this.handleText.bind(this)}></input>
            </div>
        );
    }
}

export default Modal;
