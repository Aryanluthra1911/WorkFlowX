'use client'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from "axios"
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'


const page = () =>{
    const router = useRouter()
    const [name,setname]=useState('');
    const [c_name,setc_name]=useState('');
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const [role,setrole]=useState('Admin');
    const [loading,setloading] = useState(false)

    const sendData =  async(e)=>{
        e.preventDefault();
        setloading(true)
        try{
            const res =  await axios.post('/api/registercompany',{
                name:name,
                c_name:c_name,
                email:email,
                password:password,
                role:role
            })
            if(res.data.success){
                toast.success(res.data.message);
                await signIn("credentials", {
                    redirect: false,
                    email,
                    password,
                });
                router.push("/dashboard");
            }
            else{
                toast.error(res.data.message)
            }
        }catch (err) {
            console.error('register error:', err);
            console.log(err?.response?.data)
            toast.error(err?.response?.data?.message)
        }
        finally {
            setloading(false);
        }
    }
    return (
        <div className=" h-screen w-screen flex justify-center items-center">
            <div className="w-[70%] min-h-[70%] h-auto max-w-sm flex flex-col items-center justify-around bg-gray-100 rounded-2xl">
                <div className={'w-full flex items-center justify-center font-semibold text-xl'}>
                    Register Your Company
                </div>
                <div className='w-[85%] h-auto'>
                    <form onSubmit={sendData}>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="Full Name">Full Name</Label>
                                <Input
                                    className={'bg-white'}
                                    id="Full Name"
                                    type="Full Name"
                                    placeholder=""
                                    onChange={(e) => setname(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="Company Name">Company Name</Label>
                                <Input
                                    className={'bg-white'}
                                    id="Company Name"
                                    type="Company Name"
                                    placeholder=""
                                    onChange={(e) => setc_name(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    className={'bg-white'}
                                    id="email"
                                    type="email"
                                    placeholder="name@company.com"
                                    onChange={(e) => setemail(e.target.value)}
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
                                <Input className={'bg-white'} id="password" type="password" required onChange={(e) => setpassword(e.target.value)}/>
                            </div>
                        </div>
                        <Button  type="submit" className="w-full mt-6">
                            {loading ? "Creating..." : "Create Account"}
                        </Button>
                        <Button variant="outline" className="w-full">
                            Login with Google
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default page
