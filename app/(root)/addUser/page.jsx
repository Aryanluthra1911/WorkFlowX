import React from 'react'
import { FaUserPlus } from "react-icons/fa";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LuUsers } from "react-icons/lu";
import { LuSearch } from "react-icons/lu";



const page = () => {
    return (
        <div className='w-full h-[90%] bg-[#f9fafb] flex justify-evenly items-center'>
            <div className='w-[49%] h-[97%] rounded-2xl bg-white shadow-md border-2 p-2 flex flex-col items-center justify-evenly'>
                <div className='w-[97%] h-[10%] text-2xl font-semibold flex items-center gap-4 border-b-2 border-[#2563eb] rounded-b-xl'>
                    <div className='w-12 h-12 bg-[#dbeafe] flex justify-center items-center rounded-2xl'>
                        <FaUserPlus className="h-7 w-7 shrink-0 text-[#2563eb] dark:text-neutral-200" />
                    </div>
                    <div className='text-[#2563eb] font-bold'>Create User</div>
                </div>
                <form className='w-[97%] h-[85%]' action="">
                    <div className='w-full h-[90%] flex items-center justify-around'>
                        <div className='w-[50%] h-full flex flex-col justify-center items-center'>
                            <div className='w-[90%] h-[23%] bg-white grid '>
                                <Label>Full Name</Label>
                                <Input
                                    className={'bg-white text-xl'}
                                    id="title"
                                    type="text"
                                    placeholder="Enter Name"
                                    required
                                />
                            </div>
                            <div className='w-[90%] h-[23%] bg-white grid '>
                                <Label>Email</Label>
                                <Input
                                    className={'bg-white'}
                                    id="title"
                                    type="text"
                                    placeholder="Enter Email"
                                    required
                                />
                            </div>
                            <div className='w-[90%] h-[23%] bg-white grid '>
                                <Label>Phone No.</Label>
                                <Input
                                    className={'bg-white'}
                                    id="title"
                                    type="text"
                                    placeholder="Enter number"
                                    required
                                />
                            </div>
                            <div className='w-[90%] h-[23%] bg-white grid '>
                                <Label>Joing Date</Label>
                                <Input
                                    className={'bg-white'}
                                    id="title"
                                    type="date"
                                    placeholder="Enter title"
                                    required
                                />
                            </div>
                            
                        </div>
                        <div className='w-[50%] h-full flex flex-col justify-center items-center'>
                            <div className='w-[90%] h-[23%] bg-white grid '>
                                <Label>Role</Label>
                                <Input
                                    className={'bg-white'}
                                    id="title"
                                    type="text"
                                    placeholder="Enter role"
                                    required
                                />
                            </div>
                            <div className='w-[90%] h-[23%] bg-white grid '>
                                <Label>Password</Label>
                                <Input
                                    className={'bg-white'}
                                    id="title"
                                    type="text"
                                    placeholder="Enter password"
                                    required
                                />
                            </div>
                            <div className='w-[90%] h-[23%] bg-white grid '>
                                <Label>Years of Experience</Label>
                                <Input
                                    className={'bg-white'}
                                    id="title"
                                    type="text"
                                    placeholder="Enter experience in years"
                                    required
                                />
                            </div>
                            <div className='w-[90%] h-[23%] bg-white grid '></div>
                        </div>
                    </div>
                    <div className='w-[97%] h-[10%] flex items-center justify-center'>
                        <button className='text-white w-[50%] h-[90%] bg-[#2563eb] rounded-2xl border-white border shadow-md font-semibold'>
                            Add User
                        </button>
                    </div>
                    
                </form>
            </div>
            <div className='w-[49%] h-[97%] rounded-2xl bg-white shadow-md border-2 p-2 flex flex-col items-center justify-evenly'>
                <div className='w-[97%] h-[10%] text-2xl font-semibold flex items-center gap-4 border-b-2 border-[#a855f7] rounded-b-xl'>
                    <div className='w-12 h-12 bg-[#f3e8ff] flex justify-center items-center rounded-2xl'>
                        <LuUsers className="h-7 w-7 shrink-0 text-[#a855f7] dark:text-neutral-200" />
                    </div>
                    <div className='text-[#a855f7] font-bold'>Users</div>
                </div>
                <div className='w-[97%] h-[10%] flex justify-center items-center'>
                    <div className='w-[95%] h-[70%] border-2 flex items-center justify-between pl-3 rounded-2xl'>
                        <LuSearch className="h-7 w-7 shrink-0 text-gray-300 dark:text-neutral-200" />
                        <input className='w-[90%] h-full outline-none rounded-2xl' placeholder='Search Users...'/>
                    </div>
                </div>
                <div className='w-[97%] h-[65%] border overflow-y-auto no-scrollbar'>

                </div>
                <div className='w-[97%] h-[10%] border flex justify-evenly items-center'>
                    <button className='font-bold w-[30%] h-[80%] border-2 bg-white border-[#2563eb] rounded-2xl text-[#2563eb]  hover:text-white hover:bg-[#2563eb] transform transition-all duration-200'>
                        Change Role
                    </button>
                    <button className='font-bold w-[30%] h-[80%] border-2 bg-white border-red-600 rounded-2xl text-red-600  hover:text-white hover:bg-red-600 transform transition-all duration-200'>
                        Block User
                    </button>
                    <button className='font-bold w-[30%] h-[80%] border-2 bg-white border-red-600 rounded-2xl text-red-600  hover:text-white hover:bg-red-600 transform transition-all duration-200'>
                        Delete User
                    </button>
                </div>
            </div>
        </div>
    )
}

export default page