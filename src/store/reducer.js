import * as types from './type'

const defaultState = {
    inputValue: '',
    list: []
}

export default (state = defaultState, action)=>{
    if(action.type === types.HANDLE_INPUT_CHANGE){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if(action.type === types.ADD_TODO_ITEM){
        let {inputValue} = state
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = ''
        newState.list.push(inputValue)
        return newState
    }
    if(action.type === types.DELETE_TODO_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.value,1)
        return newState
    }
    return state
}