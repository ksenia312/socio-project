let initialState = {
    blocks: [
        {text: 'КРИТЕРИЙ 1'},
        {text: 'КРИТЕРИЙ 2'},
        {text: 'КРИТЕРИЙ 3'},
        {text: 'КРИТЕРИЙ 4'},
        {text: 'КРИТЕРИЙ 5'},
        {text: 'КРИТЕРИЙ 6'},
        {text: 'КРИТЕРИЙ 7'},
        {text: 'КРИТЕРИЙ 8'},
        {text: 'КРИТЕРИЙ 9'},
        {text: 'КРИТЕРИЙ 10'},
        {text: 'КРИТЕРИЙ 11'},
        {text: 'КРИТЕРИЙ 12'},
        {text: 'КРИТЕРИЙ 13'},
        {text: 'КРИТЕРИЙ 14'},
        {text: 'КРИТЕРИЙ 15'}
    ],
    flag: -1
}
let CHANGE_TEXT = 'CHANGE_TEXT'
const dicsussionReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    switch (action.type) {
        case CHANGE_TEXT :

        function randomInteger(min, max) {
            let rand = min - 0.5 + Math.random() * (max - min + 1);
            return Math.round(rand);
        }

            stateCopy.flag = randomInteger(0, initialState.blocks.length - 1);
            return stateCopy
        default:
            return state

    }
}
export const changeTextActionCreator = () => ({type: CHANGE_TEXT})
export default dicsussionReducer