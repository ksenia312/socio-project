import React from 'react';
import style from "./mainWindow.module.css"

import PlaceForEnterContainer from "./placeForEnter/placeForEnterContainer";
import {NavLink} from "react-router-dom";

const MainWindow = (props) => {
    let onAddPerson = () => {
        props.addPerson()

    }
    return (
        <div className={style.mainWindow}>
            <div> </div>
            <div className={style.placeForEnter}>
                <PlaceForEnterContainer/>
            </div>
            <div className={style.buttons}>
                <button className={style.but1} onClick={onAddPerson}>Дальше</button>

                <NavLink exact to="/discussion">
                    <button className={style.but2}  onClick={onAddPerson}>Я последний</button>
                </NavLink>
            </div>
        </div>

    );
}
export default MainWindow;