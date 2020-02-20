import React from 'react'
// creating structure for context
const AuthContext=React.createContext({
    isAutheticated:false,
    login:()=>{
    }
});
export default AuthContext;

