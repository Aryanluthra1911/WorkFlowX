import React from "react";

const FeatureCard = ({ idx }) => {
    const Icon = idx.svg;
    return (
        <div style={{borderTop:`4px solid ${idx.border}`}} className="w-[31%] p-8 bg-white rounded-xl shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl cursor-pointer border border-gray-200 min h-70 ">
            <div className="w-full flex flex-col justify-around gap-3">
                <div
                    style={{
                        backgroundColor: `${idx.bg}`,
                    }}
                    className="w-10 h-10 flex items-center justify-center rounded-lg "
                >
                    <Icon
                        size={25}
                        style={{
                            color: `${idx.border}`,
                        }}
                    />
                </div>
                <div className="text-2xl font-bold ">
                    {idx.title}
                </div>
                <div className="text-[#6b7280] text-sm">
                    {idx.description}
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;
