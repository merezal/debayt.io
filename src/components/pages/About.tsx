import React from "react";
import "./About.css";

export default function About(){
    return(
        <React.Fragment>
            <div  className="card">
                <div className="card-header">
                    <strong className="card-header-title">ABOUT THIS PROJECT</strong>                  
                </div>
                <div className="card-content">
                    <h1 className="title">debayt.io</h1>
                    <p className="content">This project was started on August 27, 2019... Still waiting on <a href="/" title="Uh... Dude...">Jono</a> to commit to the repository. </p>
                </div>
            </div>
        </React.Fragment>
    )
}