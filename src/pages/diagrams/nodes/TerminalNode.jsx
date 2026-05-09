import { Handle, Position } from '@xyflow/react';

export default function TerminalNode({ data }) {
    return (
        <div style={{ borderRadius: '50px' }} className="px-6 py-2 bg-gray-700 border border-gray-500 text-white text-sm">
            <Handle type="target" position={Position.Top} />
            {data.label}
            <Handle type="source" position={Position.Bottom} />
        </div>
    );
}