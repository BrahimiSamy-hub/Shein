import React from 'react'
import logo from '../assets/logo.jpg'

const Sidebar = () => {
  return (
    <nav className='flex flex-col justify-between p-6 min-h-screen min-w-24 '>
      <img src={logo} alt='' className='rounded-full' width={60} />
      <ul>
        <li>dqs</li>
        <li>dqs</li>
        <li>dqs</li>
        <li>dqs</li>
        <li>dqs</li>
      </ul>
      <span>dsd</span>
    </nav>
  )
}

export default Sidebar
