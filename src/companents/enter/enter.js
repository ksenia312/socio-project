import React from 'react';
import "./enter.module.css"
import {NavLink} from "react-router-dom";
import MainWindowContainer from "./mainWindow/mainWindowContainer";

const Enter = (props) => {
    return (
        <div className='enter'>
            <NavLink exact to="/main">
                <button>Назад</button>
            </NavLink>
            <MainWindowContainer />
        </div>
    );
}
export default Enter;