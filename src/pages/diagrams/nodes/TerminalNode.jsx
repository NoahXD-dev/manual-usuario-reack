import { Handle, Position } from '@xyflow/react';

export default function TerminalNode({ data }) {
    return (
        <div className="px-6 py-2 bg-gray-700 border border-gray-500 text-white text-sm rounded-full">
            <Handle type="target" position={Position.Top} />
            {data.label}
            <Handle type="source" position={Position.Bottom} />
        </div>
    );
}