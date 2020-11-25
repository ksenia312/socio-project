import React from 'react';
import style from "./Buttons.module.css"

import {NavLink} from "react-router-dom";

const Buttons = (props) => {
    let changeText = () => {
        debugger
        props.changeText()
    }
    return (
        <div className={style.buttons}>
            <button
                className={style.but1}
                onClick={changeText}
            >
                Пропустить
            </button>

            <NavLink exact to="/finish">
                <button className={style.but2}>Мы закончили</button>
            </NavLink>

        </div>
    );
}
export default Buttons;