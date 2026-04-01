import React from "react";

const SmallProjectCard = ({ idx }) => {
    const status = idx.status;
    const getBgColor = (status) => {
        switch (status) {
            case "ACTIVE":
                return "#eff6ff";
            case "PENDING":
                return "#fffbeb";
            case "COMPLETED":
                return "#f0fdf6";
            case "CANCELLED":
                return "#fff1f1";
            case "ON_HOLD":
                return "#faf5ff";
            default:
                return "#9ca3af";
        }
    };
    const getColor = (status) => {
        switch (status) {
            case "ACTIVE":
                return "#1d4ed8";
            case "PENDING":
                return "#b5540b";
            case "COMPLETED":
                return "#065f46";
            case "CANCELLED":
                return "#991b1b";
            case "ON_HOLD":
                return "#5b21b6";
            default:
                return "#9ca3af";
        }
    };
    const getBorder = (status) => {
        switch (status) {
            case "ACTIVE":
                return "#93c5fd";
            case "PENDING":
                return "#fcd34d";
            case "COMPLETED":
                return "#6ee7b7";
            case "CANCELLED":
                return "#fca5a5";
            case "ON_HOLD":
                return "#c4b5fd";
            default:
                return "#9ca3af";
        }
    };
    const bg = getBgColor(status);
    const color = getColor(status);
    const border = getBorder(status);
    return (
        <div className="w-full h-20 bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:scale-97 hover:shadow-md transition-all  duration-500">
            <div className="flex items-center justify-between">
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 truncate">
                        {idx.title?.charAt(0).toUpperCase() + idx.title?.slice(1).toLowerCase()}
                    </h3>
                    <p className="text-sm text-gray-600 truncate">{idx.description}</p>
                </div>
                <div className="ml-4">
                    <span
                        style={{
                            backgroundColor: bg,
                            color: color,
                            borderColor: border,
                        }}
                        className="border inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                    >
                        {idx.status}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SmallProjectCard;
