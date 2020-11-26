import React from 'react';
import Person from "./person/person";
import style from "./listLeft.module.css"

const ListLeft = (props) => {
    let personsElements = props.persons.map(person =>
        <Person name={person.name}/>)
    return (
        <div className={style.list}>
            <div className={style.persons}>
                {personsElements}
            </div>
            <div className={style.divBut}>
                <button className={style.but}>Подтвердить выбор</button>
            </div>
        </div>
    );
}

export default ListLeft;