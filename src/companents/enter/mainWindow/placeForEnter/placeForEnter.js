import React from 'react';
import style from "./placeForEnter.css";
const PlaceForEnter = (props) => {

    return (
       <div>
           <textarea className={style.window} placeholder="Игрок N"/>
       </div>
    );
}
export default PlaceForEnter;