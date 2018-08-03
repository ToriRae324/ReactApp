import React from "react";
import "./Header.css";


const Header = props => (
    <div className="row shadow">
        <div className="col-md-12">
            <div className="row" id="header">
                <div className="col-md-8" id="title">
                    <h1>Neko Mixer Game</h1>
                </div>
                
                <div className="col-md-4">
                    <h3>Best Score: {props.bestScore}</h3>
                    <h3>Current Score: {props.currentScore}</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12" id="rules">
                    <h4>Click each unique kitty only once, until you've clicked them all. Beware, they will scramble every turn.</h4>
                </div>
            </div>
        </div>
    </div>
    
);

export default Header;
