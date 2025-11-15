'use client'
import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const page = () =>{
    return (
        <div className=" h-screen w-screen flex justify-center items-center">
            <Card className="w-[70%] h-[70%] max-w-sm justify-around">
                <CardHeader className={'w-full flex items-center justify-center'}>
                    <CardTitle className={'font-semibold text-xl'}>Register Your Company</CardTitle>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="Full Name">Full Name</Label>
                                <Input
                                    id="Full Name"
                                    type="Full Name"
                                    placeholder=""
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="Company Name">Company Name</Label>
                                <Input
                                    id="Company Name"
                                    type="Company Name"
                                    placeholder=""
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="name@company.com"
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
                                <Input id="password" type="password" required />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button type="submit" className="w-full">
                        Login
                    </Button>
                    <Button variant="outline" className="w-full">
                        Login with Google
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
export default page
