import React from 'react';
import style from "./person.module.css"

const Person= (props) => {
    return (
        <div className={style.person}>
            {props.name}
        </div>

    );
}

export default Person;