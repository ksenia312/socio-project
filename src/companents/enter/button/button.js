import React from 'react';
import {NavLink} from "react-router-dom";
import "./button.module.css"

const Button = (props) => {
    return (
            <NavLink exact to={props.way}>
                <button>{props.name}</button>
            </NavLink>

    );
}
export default Button;