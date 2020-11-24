import React from 'react';
import style from "./mainWindow.module.css"
import PlaceForEnter from "./placeForEnter/placeForEnter";
import Button from "../button/button";

const MainWindow = (props) => {
    return (
            <div className={style.mainWindow}>
                <div> </div>
                <div className={style.placeForEnter}>
                    <PlaceForEnter />
                </div>
                <div className={style.buttons}>
                    <Button way="/" name="Дальше"/>
                    <Button way="/" name="Я последний"/>
                </div>
            </div>

    );
}
export default MainWindow;