import React from 'react';
import {NavLink} from "react-router-dom";
const Main = (props) => {

    return (
        <div className='main'>
            <NavLink exact to="/enter">
                <button> ввод участников </button>
            </NavLink>
            <NavLink exact to="/ingame">
                <button> в игре </button>
            </NavLink>

        </div>
    );
}
export default Main;