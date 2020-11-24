import React from 'react';
import style from "./mainWindow.module.css"

import PlaceForEnterContainer from "./placeForEnter/placeForEnterContainer";
import {NavLink} from "react-router-dom";

const MainWindow = (props) => {
    let onAddPerson = () => {
        debugger
        props.addPerson()
        debugger
    }
    return (
        <div className={style.mainWindow}>
            <div></div>
            <div className={style.placeForEnter}>
                <PlaceForEnterContainer/>
            </div>
            <div className={style.buttons}>
                <NavLink exact to="/enter">
                    <button onClick={onAddPerson}>Дальше</button>
                </NavLink>
                <NavLink exact to="/dicsussion">
                    <button onClick={onAddPerson}>Я последний</button>
                </NavLink>
            </div>
        </div>

    );
}
export default MainWindow;