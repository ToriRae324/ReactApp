import React from "react";
import "./Image.css";


const Image= props => (
    <img src={props.src} alt="Cat" key={props.iid} onClick={props.isSelected(props.iid)} />
    // onClick={props.shuffle}
);

export default Image;
