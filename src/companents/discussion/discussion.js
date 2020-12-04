import React from 'react';
import style from "./discussion.module.css";
import Criterion from "./criterion/criterion";

import ButtonsContainer from "./Buttons/ButtonsContainer";

const Discussion = (props) => {


    function randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }
    let text;
    if (props.flag === -1) {
        let id = randomInteger(0, props.blocks.length - 1);
        text = props.blocks[id].text
    } else {
        text = props.blocks[props.flag].text
    }

    return (
        <div className={style.discussion}>
                <div className={style.top}>

                    <div className={style.choose}>
                        <p>ВЫБОР</p>
                    </div>
                    <ButtonsContainer/>
                </div>
                <div className={style.bottom}>
                    <Criterion text={text}/>
                </div>

        </div>
    );
}
export default Discussion;