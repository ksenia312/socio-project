import {updateAreaActionCreator} from "../../../../Redux/enterReducer";
import PlaceForEnter from "./placeForEnter";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newAreaText: state.enter.newAreaText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateArea: (text) => {
            dispatch(updateAreaActionCreator(text));
        }
    }
}
const PlaceForEnterContainer = connect(mapStateToProps, mapDispatchToProps)(PlaceForEnter)
export default PlaceForEnterContainer;