import * as Types from './actionType'


export const getInputChangeAction = (value) => ({
	type: Types.CHANGE_INPUT_VALUE,
	value
});

export const getAddItemAction = () => ({
	type: Types.ADD_TODO_ITEM
});

export const getDeleteItemAction = (index) => ({
	type: Types.DELETE_TODO_ITEM,
	index
});

export const initListAction = (data) => ({
	type: Types.INIT_LIST_ACTION,
	data
});

export const getInitList = () => ({
	type: Types.GET_INIT_LIST
});

