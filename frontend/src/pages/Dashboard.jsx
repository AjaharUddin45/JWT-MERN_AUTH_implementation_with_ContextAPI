import React from 'react'
import { useContext } from 'react'// this is hook
import { UserContext } from '../../context/userContext'

export default function Dashboard() {
    const {user} = useContext(UserContext);
  return (

    <div>
        <h2>Dashboard</h2>
        {!!user && (<h2>Hi,{user.name}!</h2> )}
    </div>
    
  )
}
