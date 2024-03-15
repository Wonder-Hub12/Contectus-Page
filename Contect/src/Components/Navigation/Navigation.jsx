import React from 'react'
import style from './Navigation.module.css'
const Navigation = () => {
  return (
  <nav className={`${style.navigation} container`}>
    <div className='logo'>
        <img src="/Images/logo.png" alt="logo" />
    </div>

    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contect</li>
    </ul>
   </nav>
  )
}

export default Navigation