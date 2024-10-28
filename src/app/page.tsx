import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='p-5'>
      <h1 className='underline text-2xl font-semibold'>Framer-Motion</h1>

      <div className='p-2 flex flex-col'>

        {/* Basics of Motion */}
        <Link
          href='/basics-of-motion'
          className='text-md'>1. Basic of Motion
        </Link>

        {/* Basics of Motion */}
        <Link
          href='/basics-of-motion'
          className='text-md'>1. Basic of Motion
        </Link>

        {/* Basics of Motion */}
        <Link
          href='/basics-of-motion'
          className='text-md'>1. Basic of Motion
        </Link>

      </div>

    </div>
  )
}

export default page