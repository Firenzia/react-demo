import React, { Component } from 'react'
import PropTypes from 'prop-types';

class  Item extends Component{
    constructor(props){
        super(props)
        this.handleClick= this.handleClick.bind(this)
        // this.deleteItem = this.deleteItem.bind(this)
    }
		componentWillReceiveProps(){
			console.log('componentWillReceiveProps')
		}
    render(){
				console.log('child render')
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

Item.propTypes = {
	content: PropTypes.string,
	index: PropTypes.number,
	deleteItem: PropTypes.func
}
Item.defaultProps = {
	conent : 'default content'
}

export default Item