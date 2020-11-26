import React from 'react';
import {NavLink} from "react-router-dom";
import ListLeftContainer from "./listLeft/listLeftContainer";
import style from "./InGame.module.css"
const InGame= (props) => {

    return (
        <div className={style.ingame}>
            <div className={style.block}>
                <NavLink exact to="/main">
                    <button className={style.but}>Назад</button>
                </NavLink>
                <h1 className={style.words}>В игре остались:</h1>
            </div>
                <ListLeftContainer />


        </div>

    );
}

export default InGame;