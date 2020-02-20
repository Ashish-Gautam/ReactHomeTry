import React, { Component} from 'react';
import Cockpit from '../../Cockpit/Cockpit'
import MyPerson from '../MyPerson'
import AuthContext from '../../../context/AuthContext'

class PersonState extends Component{
    constructor(props){
        super(props)
        console.log('[PersonState.js] Constructor')
    }

    state = {
        persons:[
            {id:11, name: 'Ashish', age:29},
            {id:22, name: 'nanu', age:22},
            {id:33, name: 'xyz', age:99}
        ],
        visible:false,
        cocpitVisible:true,
        authenticated:false
    }

    static getDerivedStateFromProps(props,state){
        console.log('[PersonState.js] getDerivedStateFromProps',props)
        return state;
    }

    componentDidMount(){
        console.log('[PersonState.js] componentDidMount')
    }

    toggleHandler=()=>{ 
        var doesVisible=this.state.visible
        this.setState({
            visible:!(doesVisible)
        })
    }

    loginHandler=()=>{
        this.setState({
            isAuthenticated:true
        })
    }

    nameChangeHandler=(event,personId)=>{
        const tempPerson=[...this.state.persons]
        const index=tempPerson.findIndex((person)=>{return personId===person.id})
        tempPerson[index].name=event.target.value
    
        this.setState({
            persons:tempPerson
        });
    }

    deleteHandler=(personIndex)=>{
        const tempPerson=[...this.state.persons]
        tempPerson.splice(personIndex,1)
        this.setState({
            persons:tempPerson
        })
    }

    
    render(){
        console.log('[PersonState.js] render()')

        let PersonListVar=null
        if(this.state.visible){
            PersonListVar=(
            <MyPerson
                persons={this.state.persons} 
                deleted={this.deleteHandler}
                nameChanged={this.nameChangeHandler}/>
            )
        }

        
        return(
            <div>
            <button onClick={()=>{
                this.setState({cocpitVisible:false})
                }}>Switch Cockpit</button> 

                <AuthContext.Provider value={{ 
                    isAuthenticated:this.state.authenticated, 
                    login:this.loginHandler}}>
                        
                {
                   this.state.cocpitVisible?<Cockpit
                   visible={this.state.visible}
                   persons={this.state.persons}
                   clicked={this.toggleHandler}
                   />:null
                }
            {PersonListVar}
            </AuthContext.Provider>
            </div>
        );
    }
}

export default PersonState;
// Checking Add in git