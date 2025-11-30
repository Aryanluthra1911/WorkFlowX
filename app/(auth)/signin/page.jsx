'use client'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signIn } from 'next-auth/react'
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation'

const page = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        setError('')
        const res =await signIn("credentials",{
            redirect:false,
            email,
            password,
        })
        if (res?.error) {
            toast.error(res.error)
            setError(res.error);
            setLoading(false);
            return;
        }
        toast.success('signin successfull')
        router.push("/dashboard");
    }

    return (
        <div className="flex justify-center items-center h-screen w-screen ">
            <div className="w-[70%] min-h-[55%] h-auto max-w-sm flex flex-col items-center justify-evenly bg-gray-100 rounded-2xl">
                <div className={'w-full flex items-center justify-center font-semibold text-xl'}>
                    Sign in to your account
                </div>
                <div className='w-[85%] h-auto'>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    className={'bg-white'}
                                    id="email"
                                    type="email"
                                    placeholder="name@company.com"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                    <a
                                        href="#"
                                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                    >
                                        Forgot your password?
                                    </a>
                                </div>
                                <Input id="password" type="password" required className={'bg-white'} onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                        </div>
                        <Button  type="submit" className="w-full mt-6">
                            
                            {loading ? "Verifying..." : "Signin"}
                        </Button>
                        <Button variant="outline" className="w-full mt-6">
                            Login with Google
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default page
