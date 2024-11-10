import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='p-5'>
      <div className="justify-center text-center text-3xl underline font-semibold">
        Framer-Motion
      </div>

      <div className='py-10 flex flex-col gap-2'>

        {/* Basics of Motion */}
        <Link href='/basics-of-motion' className='text-sm'>
          1. Basic of Motion
        </Link>

        {/* Gestures */}
        <Link href='/gestures' className='text-sm'>
          2. Gestures
        </Link>

        {/* Motion Projects */}
        <Link href='/motion-projects' className='text-sm'>
          3. Motion Projects
        </Link>

      </div>

    </div>
  )
}

export default page