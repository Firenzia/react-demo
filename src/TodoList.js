import React from 'react'
import { connect } from 'react-redux'
import * as getAction from './store/actionCreator'

const TodoList  = (prop) =>{
    const {inputValue, list, handleChange, addTodoItem, deleteTodoItem} = prop
    return (<div>
        <input onChange = {handleChange} value={inputValue}/>
        <button onClick={addTodoItem}>点我提交哈</button>
        <ul>
            {list.map((item, index) =><li onClick={()=>{deleteTodoItem(index)}} key={index}>{item}</li>)}
        </ul>
    </div> )
}

const mapStateToProps = state => ({
    inputValue: state.inputValue,
    list: state.list
})
  
const mapDispatchToProps = dispatch => ({
 
    handleChange: (e) => {
        const action = getAction.getHandleInputChangeAction(e.target.value)
        dispatch(action)
    },
    addTodoItem(){
        const action = getAction.getAddTodoItemAction()
        dispatch(action)
    },
    deleteTodoItem(index){
        const action = getAction.getDeleteItemAction(index)
        dispatch(action)
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)