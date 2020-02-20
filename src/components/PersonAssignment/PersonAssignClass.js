import React, { Component } from 'react'
import PersonAssignment from './PersonAssignment'

class PersonAssignClass extends Component{
    state={
        stateTextlength:0,
        stateText:"",
        stateValidateMsg:""
    }


    textLengthHandler=(event)=>{
        const textLen=event.target.value.length
        const text=event.target.value
        this.setState({
            stateTextlength:textLen,
            stateText:text
        })
    }

    render(){
        
         let msg=""
         if(this.state.stateTextlength < 5){
            msg="Length Too Low"
         }else{
            msg="Length Too High"
         }
        
        
        return(
        <div>
        <PersonAssignment
        onchange={this.textLengthHandler}
        len={this.state.stateTextlength}
        text={this.state.stateText}
        msg={msg}
        />
        </div>
        )
    }
} 
export default PersonAssignClass