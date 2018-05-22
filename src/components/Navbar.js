import React from 'react'
import './Navbar.css'

const Navbar = ({ title = 'Add a title!', subtitle = '' }) => {
  return (
    <div className='row nav-container'>
      <div className='twelve-col flex'>
        <img alt='' className='icon-main float-lt y-ctr' src='assets/readable-icon.png' />
        <h2 className='float-lt'>{title}</h2>
        {subtitle && <h5 className='float-lt subtitle'>{subtitle}</h5>}
      </div>
    </div>
  )
}

export default Navbar
