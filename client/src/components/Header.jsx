import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className="navbar">
      <ul>
        <li> <Link to={'/'}> Home </Link> </li>
        <li> <Link to={'/login'}> Login </Link> </li>
        <li> <Link to={'/singup'}> Singup </Link> </li>
        <li> <Link to={'/todo'}> todo </Link> </li>
      </ul>
    </div>
    </>
  )
}

export default Header