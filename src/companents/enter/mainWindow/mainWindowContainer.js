import {connect} from "react-redux";
import {addPersonActionCreator} from "../../../Redux/enterReducer";
import MainWindow from "./mainWindow";

let mapStateToProps = (state) => {
    return {
        persons: state.enter.persons,

    }
}
let mapDispatchToProps = (dispatch) => {
    return {

        addPerson: () => {
            dispatch(addPersonActionCreator())
        }

    }
}
const MainWindowContainer = connect(mapStateToProps, mapDispatchToProps)(MainWindow)

export default MainWindowContainer;