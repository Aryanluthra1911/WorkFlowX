'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
  const router = useRouter()
  return (
    <div>
      <button onClick={()=>{
        router.push('/dashboard')
      }} className='w-50 h-20 border'>dashboard</button>
    </div>
  )
}

export default page