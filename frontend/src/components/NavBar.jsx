import React from 'react'
import {Link} from "react-router-dom"

export default function NavBar() {
  return (
    <nav className='flex items-center justify-between px-2 py-4 bg-gradient-to-r from-indigo-500 via-purple-300 to-teal-500' >
        <h2 className='text-white text-2xl font-bold' >Health <span className='text-black' >Sync</span></h2>
        <ul className='flex gap-2' >
            <li><Link className='hover:text-white active:scale-0'  to = {"/"} >Home</Link></li>
            <li><Link className='hover:text-white active:scale-0'  to = {"/doctors"} >Doctors</Link></li>
            <li><Link className='hover:text-white active:scale-0'  to = {"/treatments"} >Treatments</Link></li>
        </ul>
    </nav>
  )
}
