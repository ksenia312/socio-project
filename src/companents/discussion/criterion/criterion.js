import React from 'react';
import style from './criterion.module.css'

const Criterion = (props) => {
    return (
        <div className={style.crit}>
            {props.text}
        </div>
    );
}
export default Criterion;