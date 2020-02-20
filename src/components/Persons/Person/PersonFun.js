import React, { Component } from 'react';
import PersonStyle from './PersonStyle.module.css'
import AuthContext from '../../../context/AuthContext'

// const Person =(props)=>{
//     console.log('[PersonFun.js] Rendering..')
// return (
//         <div className={PersonStyle.PersonBlock}>
//         <p onClick={props.delete}>i am {props.name} and my age {props.age}</p>
//         <input type="text" onChange={props.nameChange} value={props.name}/>
//         </div>
//     )
// }

class Person extends Component{
    constructor(props){
        super(props)
        this.refElement=React.createRef()
    }
    static contextType=AuthContext
    componentDidMount(){
        this.refElement.current.focus()
        console.log('[PersonFun.js] ',this.context.isAuthenticated)

    }

    render(){
        console.log('[PersonFun.js] Rendering..')
        return(
        <div className={PersonStyle.PersonBlock}>
        {
         this.context.isAutheticated?<p>Logged In</p>:<p>Please Log In</p>
        }
    
        <p onClick={this.props.delete}>i am {this.props.name} and my age {this.props.age}</p>
        <input 
        // ref={(inputEl)=>{
        //     this.inputElement=inputEl
        // }}
        ref={this.refElement}
        type="text" 
        onChange={this.props.nameChange} 
        value={this.props.name}/>
        </div>
        
        )
    }
}

export default Person;