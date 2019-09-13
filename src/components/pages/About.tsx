import React from 'react';
import './About.css';

export default function About(){
    return(
        <React.Fragment>
            <div  className='card'>
                <div className='card-content'>
                    <strong className='title'>ABOUT THIS PROJECT</strong>
                    <p>This is a project. What about it?</p>
                </div>
            </div>
        </React.Fragment>
    )
}