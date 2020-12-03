import {connect} from "react-redux";
import ListLeft from "./listLeft";
import {removeAndGoActionCreator} from "../../../Redux/enterReducer";



let mapStateToProps = (state) => {
    return {
        persons: state.enter.persons,

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        removeAndGo: () => {
            dispatch(removeAndGoActionCreator())

        }


    }
}
const ListLeftContainer = connect(mapStateToProps, mapDispatchToProps)(ListLeft)

export default ListLeftContainer;