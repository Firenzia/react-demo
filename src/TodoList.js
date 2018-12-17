import React, { Component, Fragment } from 'react'
import Item from './item'
import './style.css'

class TodoList extends Component{
// 存放数据
constructor(props){
		super(props);
		this.state = {
				inputValue : '',
				list:['1', '2']
		}
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleItemDelete = this.handleItemDelete.bind(this)
}

render(){
	return (
			<Fragment>
				{/* this is comment */}
				{
					// comment also
				}
					<div> 
						<label htmlFor="inputArea">请输入</label>
						<input 
							id="inputArea"
							className="input"
							value={this.state.inputValue}
							onChange={this.handleInputChange}
							ref={(refInput) => {this.refInput = refInput}} />
						<button onClick = {this.handleSubmit}>submit</button>
					</div>
					<ul>
							{
								this.getItem()
							}
					</ul>
			</Fragment>
	)
}

getItem(){
	return this.state.list.map((item, index) =>{
		// return <li key={index}
		// 				 onClick={this.handleItemDelete.bind(this,index)}>{item}</li>
						//  dangerouslySetInnerHTML={{__html: item}}></li>  不会转义
			return <Item 
						content={item} 
						index={index} 
						deleteItem={this.handleItemDelete}
						key={index}/>
	})
}

handleInputChange(e){
	// 新版推荐用函数, 异步
	// this.setState({
	// 	'inputValue': e.target.value
	// })  
	const value = e.target.value
	this.setState(() => ({inputValue: value}))
} 
handleSubmit(){
	this.setState((prevState) => {return {
		list: [...prevState.list, prevState.inputValue],
		inputValue: ''
	}})
}
handleItemDelete(index){
	// immutable, 不允许直接修改state
	
	this.setState((prevState)=>{
		let listCopy = [...prevState.list];
		listCopy.splice(index, 1);
		return {list: listCopy}

	})
}

}

export default TodoList