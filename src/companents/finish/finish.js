import React from 'react';
import {NavLink} from "react-router-dom";
import style from "./finish.module.css"


const Finish= () => {
    return (
        <div className={style.di}>
            <NavLink exact to="/main">
                <button className={style.but} >Перейти на главное меню</button>
            </NavLink>
        </div>
    );
}
export default Finish;