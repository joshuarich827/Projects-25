import React from 'react'
import Link from "next/link";

export const Navbar = () => {
  return (
    <div>
      <nav className='bg-blue-400 text-white p-4 flex justify-between items-center transparent'>
      <h1 className='font-bold text-lg'>📚 My Book Reviews</h1>
      <div className='flex flex-col gap-6 md:flex-row items-center justify-between mt-2 md:mt-0'>
        <Link href={""} className='hover:underline'>Home</Link>
        <Link href={""} className='hover:underline'>Favorites</Link>
        <Link href={"/auth/signin"} className='hover:underline'>signin</Link>

        <Link href={""} className='hover:underline'>Add your Reviews</Link>
      </div>
    </nav>
    </div>
  )
}







