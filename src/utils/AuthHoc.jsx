import React from 'react'
import { useContext } from 'react'
import { ContextAPI } from './ContextAPI'
import { Navigate } from 'react-router-dom'

const AuthHoc = ({children}) => {
    const {user, loading} = useContext(ContextAPI)

    if(loading) return <div>...Loading</div>
    if(user) return children;
    return <Navigate to={'/'}/>
  
}

export default AuthHoc