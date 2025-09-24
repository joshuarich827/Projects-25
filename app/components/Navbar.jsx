import { Link } from '@mui/material'
import React from 'react'



export const Navbar = () => {
  return (
    <nav className='bg-blue-400 text-white p-4 flex justify-between items-center transparent'>
      <h1 className='font-bold text-lg'>📚 My Book Reviews</h1>
      <div className='flex flex-col md:flex-row items-center justify-between mt-2 md:mt-0'>
        <Link to="/" className='hover:underline'>Home</Link>
        <Link to="/" className='hover:underline'>Favorites</Link>
        <Link to="/" className='hover:underline'>Profile</Link>

        <Link to="/add" className='hover:underline'>Add your Reviews</Link>
      
      </div>
    </nav>
  )
}
