"use client";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ResponsiveContainer } from "recharts";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useState } from "react";

export const description = "A multiple bar chart";

const chartData = [
    { month: "January", completed: 6, Due: 2 },
    { month: "February", completed: 4, Due: 2 },
    { month: "March", completed: 4, Due: 3 },
    { month: "April", completed: 5, Due: 2 },
    { month: "May", completed: 4, Due: 2 },
    { month: "June", completed: 2, Due: 3 },
    { month: "July", completed: 1, Due: 2 },
    { month: "August", completed: 5, Due: 1 },
    { month: "September", completed: 2, Due: 1 },
    { month: "Octuber", completed: 8, Due: 7 },
    { month: "November", completed: 3, Due: 4 },
    { month: "December", completed: 6, Due: 4 },
];

export function ChartBarMultiple({ className }) {
    const [loading,setLoading] = useState(true)
    setTimeout(() => {
        setLoading(false)
    }, 2000);
    return (
        <Card className={className}>
            <CardHeader className={"flex flex-col "}>
                <CardTitle className={"font-bold "}>Task Activity</CardTitle>
                <CardDescription className={"text-xs font-semibold"}>
                    January - December 2026
                </CardDescription>
            </CardHeader>

            <CardContent
                className={"w-full flex justify-center items-center pr-6"}
            >
                <div className="w-full h-[220px] flex justify-center items-center">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chartData}>
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                                tickFormatter={(value) => value.slice(0, 3)}
                                className="text-xs font-semibold"
                            />
                            <YAxis
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                                className="text-xs font-semibold flex  justify-center items-center"
                                label={{
                                    angle: -90,
                                    position: "insideLeft",
                                }}
                            />
                            <Bar dataKey="completed" fill={`${loading?"#D1D5DB":"#3b82f6"}`} className={`${loading?"animate-pulse [animation-duration:1s]":""}`} />
                            <Bar dataKey="Due" fill={`${loading?"#D1D5DB":"#ef4444"}`} className={`${loading?"animate-pulse [animation-duration:1s]":""}`}/>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}
