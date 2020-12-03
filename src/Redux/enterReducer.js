

let initialState = {
    newAreaText: '',
    persons: [],
    forRemove: ''
}
const UPDATE_AREA = "UPDATE_AREA"
const ADD_PERSON = "ADD_PERSON"
/*const KILL = 'KILL'*/
/*let last = ''*/
let REMOVE_AND_GO = 'REMOVE_AND_GO'
let REMOVE_PERSON = 'REMOVE_PERSON'

const enterReducer = (state = initialState, action) => {
    let stateCopy = {...state};

    switch (action.type) {
        case UPDATE_AREA :
            stateCopy.newAreaText = action.newText;
            return stateCopy
        case ADD_PERSON:
            let newPerson = {
                name: state.newAreaText,
                value: true
            };
            if (newPerson.name !== '') {
                stateCopy.persons = [...state.persons]
                stateCopy.persons.push(newPerson);
                stateCopy.newAreaText = ''
                return stateCopy
            } else {
                return state
            }
        case REMOVE_PERSON :
            stateCopy.forRemove = action.name;
            return stateCopy
        /*case KILL:
            debugger
            if (last !== '') {
                stateCopy.persons.find(person => person.name === last).value = true
            }
            stateCopy.persons.find(person => person.name === action.name1).value = false
            last = action.name1

            return stateCopy*/
        case REMOVE_AND_GO:
            let id = stateCopy.persons.indexOf(
                stateCopy.persons.find(person => person.name === stateCopy.forRemove)
            )
            stateCopy.persons.splice(id, 1)
            return stateCopy
        default:
            return state
    }
}
export const updateAreaActionCreator = (text) => ({type: UPDATE_AREA, newText: text})
export const addPersonActionCreator = () => ({type: ADD_PERSON})

/*export const killWordsActionCreator = (name1) => ({type: KILL, name1: name1})*/
export const removePersonActionCreator = (name1) => ({type: REMOVE_PERSON, name: name1})

export const removeAndGoActionCreator = () => ({type: REMOVE_AND_GO})
export default enterReducer
