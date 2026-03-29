'use client'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import useUserStore from '@/store/user/useUserstore'
import api from '@/lib/axios'

const UserProvider = ({ children }) => {
    const { data: session } = useSession()
    const user = useUserStore((state) => state.user)
    const setUser = useUserStore((state) => state.setUser)

    useEffect(() => {
        if (!session?.user?.email || user) return // 🔥 already hai to skip

        const fetchUser = async () => {
            try {
                const res = await api.get('/Dashboard/fetchUserData', {
                    params: { email: session.user.email }
                })
                setUser(res.data.data)
            } catch (err) {
                console.error(err)
            }
        }

        fetchUser()
    }, [session, user])

    return children
}

export default UserProvider