import React from 'react'
import './NewPersonStyle.css'
import Radium from 'radium'


const NewPersonFun=(props)=>{
    return(
    <div className="NewPersonStyle">
    <p onClick={props.click}>Hi my name is {props.name} my age is {props.age}</p>
    <input type='text' onChange={props.change} value={props.name}/>
    </div>
    )
}

export default Radium(NewPersonFun);