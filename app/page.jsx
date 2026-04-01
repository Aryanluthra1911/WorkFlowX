'use client'
import useUserStore from '@/store/user/useUserstore'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const page = () => {
  const router = useRouter()
  const {status} = useSession();
  const clearUser = useUserStore((state) => state.clearUserStore);
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);
  useEffect(() => {
    if (status === "unauthenticated") {
      clearUser();
    }
  }, [status]);
  if (status === "loading"){
    return <div className='h-screen w-screen text-2xl flex justify-center items-center'>
      loading...
    </div>
  }
  return (
    <div>
      <button onClick={()=>{
        router.push('/register')
      }} className='w-50 h-20 border'>register</button>
      <button onClick={()=>{
        router.push('/signin')
      }} className='w-50 h-20 border'>signin</button>
      <button onClick={()=>{
        router.push('/dashboard')
      }} className='w-50 h-20 border'>dashboard</button>
    </div>
  )
}

export default page