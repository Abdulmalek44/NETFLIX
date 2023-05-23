import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'

const Protected = ({ children }) => {
    const { user } = UserAuth();

    if (user) {
        return children
    } else {
        return <Navigate to='/NETFLIX' />
    }
}

export default Protected
