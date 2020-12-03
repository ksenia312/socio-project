import {connect} from "react-redux";
import Person from "./person";

import { removePersonActionCreator} from "../../../../Redux/enterReducer";



let mapStateToProps = (state) => {
    debugger

    return {

        persons:state.enter.persons
    }
}
let mapDispatchToProps = (dispatch) => {
    debugger
    return {

        removePerson: (name1) => {
            dispatch(removePersonActionCreator(name1))
        /*    dispatch(killWordsActionCreator(name1))*/
        }

    }
}
const PersonContainer = connect(mapStateToProps, mapDispatchToProps)(Person)

export default PersonContainer;