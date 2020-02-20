import React, { Component } from 'react'
import PersonFun from './Person/PersonFun';

// const MyPerson=(props)=>{
//     console.log('[MyPerson.js] Rendering..')
//     return(
//         props.persons.map((personObj,personIndex)=>{
//             return (<PersonFun 
//             name={personObj.name} 
//             age={personObj.age} 
//             key={personObj.id}
//             delete={()=>props.deleted(personIndex)}
//             nameChange={(event)=>props.nameChanged(event,personObj.id)}/>
//             )})
//     )
// };

class MyPerson extends Component{
    static getDerrivedStateFromProps(){
        console.log('[MyPerson.js] Rendering..')
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('[MyPerson.js] shouldComponentUpdate')
        if(nextProps.persons!==this.props.persons){
            return true
        }else{
            return false
        }
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('[MyPerson.js] getSnapshotBeforeUpdate')
        return {message:'snapshot!'}
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('[MyPerson.js] componentDidUpdate')
        console.log(snapshot)
    }

    componentWillUnmount(){
        console.log('[MyPerson.js] componentWillUnmount') 
    }
    render(){
            console.log('[MyPerson.js] Rendering..')
        return(
            this.props.persons.map((personObj,personIndex)=>{
                return (<PersonFun 
                name={personObj.name} 
                age={personObj.age} 
                key={personObj.id}
                delete={()=>this.props.deleted(personIndex)}
                nameChange={(event)=>this.props.nameChanged(event,personObj.id)}/>
                )}) 
        )
    }
}
export default MyPerson