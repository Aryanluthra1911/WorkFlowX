"use client";
import { Pie, PieChart,cell } from "recharts";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A donut chart";
export function Piechart_Block({
    title,
    className,
    data = [],
    chartConfig = {},
    dataKey,
    nameKey,
    loading,
}) {
    const isEmpty = !data || data.length === 0;
    const chartData =
        loading || isEmpty
            ? [{ name: "Loading", value: 100, fill: "#D1D5DB" }]
            : data;
    const isDummy = loading || isEmpty;
    return (
        <div
            className={`${className} rounded-2xl bg-white border-2  flex flex-col justify-evenly items-center shadow-md `}
        >
            <div className="w-[90%] h-[15%] text-xl font-bold flex items-center justify-center">
                {title}
            </div>
            <div className="w-[90%] h-[70%] flex ">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px] transition-transform duration-500 ease-out group-hover:scale-105"
                >
                    <PieChart className={`transition-transform duration-300 ease-out group-hover:scale-105 ${loading ? " animate-pulse [animation-duration:1s]" : ""}`}>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey={isDummy ? "value" : dataKey}
                            nameKey={isDummy ? "name" : nameKey}
                            innerRadius={68}
                            outerRadius={95}
                            cornerRadius={4}
                        />
                    </PieChart>
                </ChartContainer>
            </div>
        </div>
    );
}
