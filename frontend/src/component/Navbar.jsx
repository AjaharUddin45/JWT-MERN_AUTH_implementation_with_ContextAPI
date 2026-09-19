import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
   <nav>
    <Link to="/">Home</Link> &nbsp; &nbsp;
    <Link to="/register">Register</Link> &nbsp; &nbsp;
    <Link to="/login">Login</Link>
   </nav>
  )
}
