import React, { Component } from 'react'
import { Input, Button ,List} from 'antd';
import 'antd/dist/antd.css';  

class TodoList extends Component {
    constructor( props ) {
        super(props);
        this.state = {
            inputContent :'abc',
            todoList :[1,2,3]
        }
        this.handleChange = this.handleChange.bind(this)
        this.addItem = this.addItem.bind(this)
    }
    
    render () {
        return (
            <div className="common-box">
                <div style={{marginBottom:'20px'}}>
                    <Input size="small" style={{width:'200px'}} value={this.state.inputContent} onChange={this.handleChange}/>
                    <Button type="primary" size="small"  style={{marginLeft:'30px'}} onClick={this.addItem}>Submit</Button>
                </div>
                <List
                    bordered
                    style={{width:'400px'}}
                    dataSource={this.state.todoList}
                    renderItem={(item, index) => (<List.Item onClick={this.deleteItem.bind(this, index)}>{item}</List.Item>)}
                    />
            </div>
        )
    }
    
    handleChange(e){
        this.setState({
            inputContent:e.target.value
        })
    }
    addItem(){
        this.setState({
            todoList: this.state.todoList.concat(this.state.inputContent),
            inputContent: ''
        })
        
    }  
    deleteItem(index){
        let newList = [...this.state.todoList]
        newList.splice(index, 1)
        
        this.setState({  
            todoList:  newList
        })
    }

}

export default TodoList