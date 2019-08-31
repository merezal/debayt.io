import React from 'react';
import './Bubble.css';
import Button from '@material-ui/core/Button';
import Modal from './Modal';


class Bubble extends React.Component <any> {
    
/*    constructor(){
        super()
        this.state={
            Hidden: true
        }
    }*/
    render(){
        let modalState: boolean=false;
    
        let editContent = () => {
            console.log("Clicked", modalState, "to", !modalState);
            modalState= !modalState;
        }
    
        let txtCont=this.props.content.argument;
    
    
        let toggleVisibility = (bool: boolean) => {
            if(bool){
                return{
                    visibility: 'visible',
                }
            }
            else{
                return{
                    visibility: 'hidden',
                }
            }
        }
    
        
        return(
            <div className='Thought'>
                
                {/* This is the Text/Button */}
                <Button variant="contained" style={{textTransform: 'none'}} onClick={editContent}>{txtCont}</Button>
                
                {/* This is the [hidden] modal backdrop */}
                <Modal style={toggleVisibility(false) as React.CSSProperties}/>
            </div>
        );   
    }
}

export default Bubble;