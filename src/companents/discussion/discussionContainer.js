
import Discussion from "./discussion";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        blocks:state.discussion.blocks,
        flag: state.discussion.flag
    }
}
let mapDispatchToProps = () => {
    return {
    }
}

const DiscussionContainer = connect(mapStateToProps, mapDispatchToProps)(Discussion)
export default DiscussionContainer;