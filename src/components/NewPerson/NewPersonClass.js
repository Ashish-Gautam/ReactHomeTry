import React, { Component} from 'react';
import NewPersonFun from './NewPersonFun';
import Radium from 'radium'


class NewPersonClass extends Component{
    state={
        persons:[
            {id: 11, name:'Ash',age:29},
            {id:22, name:'nanu',age:22},
            {id:23, name:'xyz',age:99}
        ],
        showPerson:false
    }

    switchNameHandler = (newName) => {
        this.setState({
            persons:[
                {name:newName,age:29},
                {name:'nanu',age:22}
            ]
        })
    }

    nameChangeHandler=(event,id)=>{

        const personIndex=this.state.persons.findIndex(person=>{
            return person.id===id
        })

        const person={...this.state.persons[personIndex]}

        person.name=event.target.value

        const persons=[...this.state.persons]
        persons[personIndex]=person

        this.setState({
            persons:persons
        })
    }

    toggleHandler=()=>{
        const doesShow=this.state.showPerson
        this.setState({
            showPerson:!doesShow
        })
    }

    deleteHandler=(personIndex)=>{
        // const npersons=this.state.persons
        const npersons=[...this.state.persons]
        npersons.splice(personIndex,1)
        this.setState({
            persons:npersons
        })
    }

    
    render(){

        const style={
            backgroundColor:'white',
            font:'inherit',
            border:'1px solid blue',
            padding:'8px',
            cursor:'pointer',
            ':hover':{
                backgroundColor:'lightgreen',
                color:'black'
            }
        };
    
        let viewPersons=null
        if(this.state.showPerson){
            viewPersons=(
            <div>
            {this.state.persons.map((person, index)=>{
                return<NewPersonFun 
                name={person.name} 
                age={person.age}
                key={person.id}
                click={()=>this.deleteHandler(index)}
                change={(event)=>this.nameChangeHandler(event,person.id)}
                />
            })}
            </div>
            )
            style.backgroundColor='red'
            style[':hover']={
                backgroundColor:'salmon',
                color:'black'
            }
        }

        const classes=[]
            if(this.state.persons.length<=2){
                classes.push('bold')
            }

            if(this.state.persons.length<=1){
                classes.push('red')
            }



        return(
            <div >
            <p className={classes.join(' ')}>this is awesome</p>
            <button style={style} 
            onClick={this.toggleHandler}>toogle person</button>
            {viewPersons}       
            </div>
        )
    }
}
export default Radium(NewPersonClass);


