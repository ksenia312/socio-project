import React from 'react';
import style from "./placeForEnter.module.css";
const PlaceForEnter = (props) => {
    let newAreaElement = React.createRef();
    let onAreaChange = () => {
        let text = newAreaElement.current.value;
        props.updateArea(text)
    }
    return (
       <div>
           <input
               className={style.inp}
               ref={newAreaElement}
               placeholder="Игрок N"
               value={props.newAreaText}
               onChange={onAreaChange}
               maxLength='30'
           />
       </div>
    );
}
export default PlaceForEnter;