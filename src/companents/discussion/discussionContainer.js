
import Discussion from "./discussion";
import {connect} from "react-redux";

debugger
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
debugger
const DiscussionContainer = connect(mapStateToProps, mapDispatchToProps)(Discussion)
export default DiscussionContainer;