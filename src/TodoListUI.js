import React from 'react'
import { Input, Button ,List} from 'antd';
import 'antd/dist/antd.css';
import './TodoList.scss'

export default (prop) =>{
    return (
        <div className="common-box">
                <div style={{marginBottom:'20px'}}>
                    <Input size="small" style={{width:'200px'}} value={prop.inputValue} onChange={prop.handleChange}/>
                    <Button type="primary" size="small"  style={{marginLeft:'30px'}} onClick={prop.addItem}>Submit</Button>
                </div>
                <List
                    bordered
                    style={{width:'400px'}}
                    dataSource={prop.list}
                    renderItem={(item, index) => (<List.Item onClick={()=>{prop.deleteItem(index)}}>{item}</List.Item>)}
                    />
            </div>
    )
}