let initialState = {
    newAreaText: '',
    persons:[]

}
const UPDATE_AREA = "UPDATE_AREA"
const ADD_PERSON="ADD_PERSON"
const enterReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    switch (action.type) {
        case UPDATE_AREA :
            stateCopy.newAreaText = action.newText;
            return stateCopy
        case ADD_PERSON:
        let newPerson = {
           name: state.newAreaText,
        };
            stateCopy.persons=[...state.persons]
            stateCopy.persons.push(newPerson);
            stateCopy.newAreaText = ''
            return stateCopy
        default:
            return state
    }
}
export const updateAreaActionCreator = (text) => ({type: UPDATE_AREA, newText: text})
export const addPersonActionCreator = () => ({type: ADD_PERSON})
export default enterReducer