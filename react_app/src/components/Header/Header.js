import React from "react";
import "./Header.css";


const Header = props => (
    <div className="row">
        <div className="col-md-8">
            <h1>Header</h1>
        </div>
        
        <div className="col-md-4">
            <h2>Best Score: {props.bestScore}</h2>
            <h2>Current Score: {props.currentScore}</h2>
        </div>

    </div>
);

export default Header;
