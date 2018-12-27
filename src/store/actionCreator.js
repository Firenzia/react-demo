import * as types from './type'

export const getHandleInputChangeAction = (value) => ({
    type: types.HANDLE_INPUT_CHANGE,
    value
})

export const getAddTodoItemAction = () => ({
    type: types.ADD_TODO_ITEM,
})

export const getDeleteItemAction = (index) => ({
    type: types.DELETE_TODO_ITEM,
    value: index
})