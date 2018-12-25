import  * as Types from './actionType'

const defaultState = {
	inputValue: 'lalala',
	list: [1,2,3]
}

// reducer 可以接受state，但是绝不能修改state
// 纯函数指的是，给定固定的输入，就一定会有固定的输出，而且不会有任何副作用
export default (state = defaultState, action) => {

	if (action.type === Types.CHANGE_INPUT_VALUE) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.inputValue = action.value;
		return newState;
	}

	if (action.type === Types.INIT_LIST_ACTION) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list = action.data;
		return newState;
	}

	if (action.type === Types.ADD_TODO_ITEM) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.push(newState.inputValue);
		newState.inputValue = '';
		return newState;
	}
	if (action.type === Types.DELETE_TODO_ITEM) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.index, 1);
		return newState;
	}
	return state;
}

