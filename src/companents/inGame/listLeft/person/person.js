import React from 'react';
import style from "./person.module.css"

const Person = (props) => {

    let removePerson = () => {
        props.removePerson(props.name)

    }
    /*let value = props.persons.find(person => person.name === props.name).value*/
    debugger
    return (
        <div className={style.person}>
            <div className={/*(value && */style.personName/*)||(style.personNameActive)*/}>
                {props.name}
            </div>
            <div className={style.divbut}>
                <button
                    className={style.but}
                    onClick={removePerson}
                />
            </div>

        </div>
    );
}

export default Person;