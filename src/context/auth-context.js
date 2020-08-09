import React from 'react'

const Auth_Context=React.createContext({
    authenticated:false,
    login:()=>{}
});

export default Auth_Context