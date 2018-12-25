import React, { Component } from 'react'
import {getInitList,getInputChangeAction, getAddItemAction, getDeleteItemAction} from './store/actionCreator'
import TodoListUI from './TodoListUI'
import 'antd/dist/antd.css';
import './TodoList.scss'
import store from './store';
  

class list extends Component {
    constructor( props ) {
        super(props);
        this.state = {inputValue:'',list:[]}
        this.handleChange = this.handleChange.bind(this)
        this.addItem = this.addItem.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        store.subscribe(this.handleStoreChange)
    }
    
    render () {
        return (
            <TodoListUI inputValue ={this.state.inputValue}
            list = {this.state.list}
            deleteItem = {this.deleteItem}
            addItem = {this.addItem} 
            handleChange={this.handleChange}/>
        ) 
    }
    
    componentDidMount(){
        const action= getInitList()
        console.log(action)
        store.dispatch(action) 
    }

    handleChange(e){
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }
    addItem(){  
        const action = getAddItemAction()
        store.dispatch(action)    
    }   
    deleteItem(index){
        const action = getDeleteItemAction(index)
        store.dispatch(action)
    }
    handleStoreChange(){
        this.setState(store.getState())
    }

}

export default list