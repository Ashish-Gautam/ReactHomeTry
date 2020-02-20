import React, { useState} from 'react';
import Person from './PersonFun'

const PersonReactHook=()=>{
    const initialState=  {
        persons:[
        {name: 'Ashish', age:29},
        {name: 'nanu', age:22}
        ]
    }
    const [personState, setPersonState] = useState(initialState)

    const switchNameHandler=()=>{
        setPersonState({
            persons:[
                {name: 'Ashu', age:29},
                {name: 'Abhishek', age:22}
            ] 
        })
    }

    return(
        <div>
        <button onClick={switchNameHandler}>Change</button>
        <Person name={personState.persons[0].name}
         age={personState.persons[0].age}/>
        <Person name={personState.persons[1].name}
         age={personState.persons[1].age}/>
        </div>
    )

}

export default PersonReactHook

