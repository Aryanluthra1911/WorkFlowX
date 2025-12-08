'use client'
import Admin_dashboard from '@/components/Admin_dashboard'
import Manger_dashboard from '@/components/Manger_dashboard'
import Member_dashboard from '@/components/Member_dashboard'

import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

const page = () => {
    const {data:session}= useSession()
    const [role,setrole] = useState('')
    useEffect(()=>{
        setrole(session.user.role)
    },[session])
    if(role === 'Admin'){
        return <Admin_dashboard/>
    }
    else if(role === 'Manager'){
        return <Manger_dashboard/>
    }
    else if(role === 'Manager'){
        return <Member_dashboard/>
    }
}

export default page