import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";

const TaskCard = ({ idx, idx2 }) => {
    const [hovered, setHovered] = useState(false);
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging 
    } = useSortable({ id: idx2.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.3 : 1,
        visibility: isDragging ? "hidden" : "visible",
        border: (hovered || isDragging)
            ? `2px solid ${idx.borderClr}`
            : "1px solid #e5e7eb",
        boxShadow: (hovered || isDragging)
            ? `0 6px 20px rgba(0,0,0,0.1), 0 0 0 1px ${idx.borderClr}`
            : "0 1px 4px rgba(0,0,0,0.06)",
    };

    return (
        <div
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            style={style}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="w-full bg-white rounded-xl border border-gray-200 p-3 shadow-sm cursor-grab"
        >
            <div className='font-bold text-sm'>
                {idx2.title}
            </div>

            <div className='text-xs text-gray-400'>
                {idx2.description}
            </div>

            <div className='flex gap-2 text-xs items-center mt-2'>
                <div className='w-7 h-7 bg-[#2563eb] rounded-2xl flex justify-center items-center text-white text-sm font-semibold'>
                    {idx2.assignedTo?.split(" ").map(w => w[0]).join("").toUpperCase()}
                </div>
                {idx2.assignedTo?.toUpperCase()}
            </div>
        </div>
    );
};
export default TaskCard