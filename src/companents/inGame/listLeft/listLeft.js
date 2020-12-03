import React from 'react';

import style from "./listLeft.module.css"
import PersonContainer from "./person/personContainer";
import {NavLink} from "react-router-dom";

const ListLeft = (props) => {
    let personsElements = props.persons.map(person =>
        <PersonContainer name={person.name}/>)
    let removeAndGo = () => {
        props.removeAndGo()

    }
    return (
        <div className={style.list}>
            <div className={style.persons}>
                {personsElements}
            </div>
            <div className={style.divBut}>
                <NavLink exact to="/discussion">
                    <button className={style.but}
                            onClick={removeAndGo}
                    >Подтвердить выбор</button>
                </NavLink>
            </div>
        </div>
    );
}

export default ListLeft;