import {connect} from "react-redux";
import Buttons from "./Buttons";
import {changeTextActionCreator} from "../../../Redux/discussionReducer";

let mapStateToProps = (state) => {
    return {


    }
}
let mapDispatchToProps = (dispatch) => {

    return {

        changeText: () => {
            dispatch(changeTextActionCreator())
        }

    }
}
const ButtonsContainer = connect(mapStateToProps, mapDispatchToProps)(Buttons)

export default ButtonsContainer;
