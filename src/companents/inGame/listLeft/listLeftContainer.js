import {connect} from "react-redux";
import ListLeft from "./listLeft";


let mapStateToProps = (state) => {
    return {
        persons: state.enter.persons,

    }
}
let mapDispatchToProps = (dispatch) => {
    return {


    }
}
const ListLeftContainer = connect(mapStateToProps, mapDispatchToProps)(ListLeft)

export default ListLeftContainer;