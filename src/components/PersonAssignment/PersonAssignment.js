import React from 'react';

const PersonAssignment=(props)=>{
    return(
        <div>
            <p>input length is {props.len} {props.msg}</p>
            <input type='text' onChange={props.onchange} value={props.text}/>
        </div>
    )
}
export default PersonAssignment