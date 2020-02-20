import React, {useState} from 'react'
import NewPersonFun from './NewPersonFun'

const NewPersonStateHook=()=>{
    const [state, setstate] = useState({
        persons:[
        {name:'AKG', age:55},
        {name:'KGN', age:786}
    ]
    })

    const switchStateName=()=>{
        setstate({
            persons:[{name:'AKG_xyz', age:55},
            {name:'KGN_123' , age:786}]
        })
    }
    return(
        <div>
            <button onClick={switchStateName}>Switch Name</button>
            <NewPersonFun 
            name={state.persons[0].name} 
            age={state.persons[0].age}/>
            <NewPersonFun 
            name={state.persons[1].name} 
            age={state.persons[1].age}/>
        </div>
    )
}

export default NewPersonStateHook