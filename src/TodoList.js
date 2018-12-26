import React from 'react'
import { connect } from 'react-redux'
import * as types from './store/type'

const TodoList  = (prop) =>{
    const {handleChange, inputValue} = prop
    return (<input onChange = {handleChange} value={inputValue}/>)
}

const mapStateToProps = state => ({
    inputValue: state.inputValue
})
  
const mapDispatchToProps = dispatch => ({
 
    handleChange: (e) => {
        const action = {
            type: types.HANDLE_INPUT_CHANGE,
            value: e.target.value
        }
        dispatch(action)
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)