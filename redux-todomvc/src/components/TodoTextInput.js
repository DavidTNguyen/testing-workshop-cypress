import React, {Component} from "react"

export default class TodoTextInput extends Component{
    constructor(props){
        super(props);
        this.state={
            text: this.props.text || ''
        }
    }

    handleChange= e=>{
        this.setState({
            text: e.target.value
        })
    }
 
    handleSubmit = e =>{
        const text = e.target.value.trim()
        if(e.which === 13){
            this.props.onSave(text)

            // 如果是新增，不是修改，就清空欄位
            if(this.props.newTodo){
                this.setState({
                    text: ''
                })
            }
        }
    }
    // onFocus事件就是當游標落在文字框中時發生的事件。
    // onBlur事件是游標失去焦點時發生的事件。
    handleBlur = e => {
        if(!this.props.newTodo){
            this.props.onSave(e.target.value)
        }
    }

    render(){
        return(
            <input className="newTodo"
                type='text'
                placeholder={this.props.placeholder}
                onChange={this.handleChange}
                value={this.state.text}
                onKeyDown={this.handleSubmit}
                onBlur={this.handleBlur}
                autoFocus={true}
            />
        )
    }
}