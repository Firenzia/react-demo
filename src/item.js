import React, { Component } from 'react'

class  Item extends Component{
    constructor(props){
        super(props)
        this.handleClick= this.handleClick.bind(this)
        // this.deleteItem = this.deleteItem.bind(this)
    }

    render(){
        const {content} = this.props
        return (
            <li onClick={this.handleClick}>
                {content}
            </li>
        )
    }

    handleClick(){ 
        const {deleteItem, index} = this.props
        deleteItem(index)
    }
}

export default Item