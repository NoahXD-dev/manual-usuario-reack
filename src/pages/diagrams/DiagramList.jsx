import { Button } from "flowbite-react";
import { HiOutlineTrash, HiPlus } from "react-icons/hi";

export default function DiagramList({ diagrams, selectedId, onSelect, onCreate, onDelete }) {
    return (
        <div className="flex flex-col h-full w-64 bg-gray-800 border-r border-gray-700">
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
                <span className="text-white font-semibold">Diagramas</span>
                <Button size="xs" onClick={onCreate}>
                    <HiPlus />
                </Button>
            </div>

            <div className="flex-1 overflow-y-auto">
                {diagrams.map((d) => (
                    <div
                        key={d.id}
                        onClick={() => onSelect(d.id)}
                        className={`flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-700 
                            ${selectedId === d.id ? "bg-gray-700 border-l-2 border-blue-500" : ""}`}
                    >
                        <div>
                            <p className="text-white text-sm font-medium">{d.title}</p>
                            <p className="text-gray-400 text-xs">{d.updatedAt}</p>
                        </div>
                        <Button
                            color="red"
                            outline
                            size="xs"
                            onClick={(e) => { e.stopPropagation(); onDelete(d.id); }}
                        >
                            <HiOutlineTrash />
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
}