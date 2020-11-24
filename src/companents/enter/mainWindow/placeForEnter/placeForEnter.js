import React from 'react';
import "./placeForEnter.css";
const PlaceForEnter = (props) => {
    let newAreaElement = React.createRef();
    let onAreaChange = () => {
        let text = newAreaElement.current.value;
        props.updateArea(text)
    }
    return (
       <div>
           <textarea
               ref={newAreaElement}
               placeholder="Игрок N"
               value={props.newAreaText}
               onChange={onAreaChange}
           />
       </div>
    );
}
export default PlaceForEnter;