import React, {useEffect, useRef, useContext } from 'react'
import cockpitStyle from './CockpitStyle.module.css'
import AuthContext from '../../context/AuthContext'

const Cockpit=(props)=>{
    const clickButtonRef=useRef(null)
    const authContext=useContext(AuthContext)

    console.log('[Cockpit,js]',authContext.isAutheticated)

    useEffect(()=>{
        console.log('[Cockpit.js] useEffect()')
        // setTimeout(() => {
        //     alert('saved data to cloud')
        // }, 1000);
        return ()=>{
            console.log('[Cockpit.js] Cleanup')
        }
    },[])

    let buttonClass=cockpitStyle.button;
    if(props.visible){
        buttonClass=cockpitStyle.Red
    }
    const assignClasses=[]
        if(props.persons.length<=2){
            assignClasses.push(cockpitStyle.bold)
        }

        if(props.persons.length<=1){
            assignClasses.push(cockpitStyle.red)
        }

    return(
        <div>
        <button ref={clickButtonRef} className={buttonClass} onClick={props.clicked}>Toggle</button>
        <p className={assignClasses.join(' ')}>This is really working..</p>
        <button  onClick={authContext.login}>Log In</button>
        </div>
      
    )
}

export default Cockpit