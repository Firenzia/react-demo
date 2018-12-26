import * as types from './type'

const defaultState = {
    inputValue: '',
    list: []
}

export default (state = defaultState, action)=>{
    if(action.type === types.HANDLE_INPUT_CHANGE){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.inputValue
        return newState
    }
    return state
}