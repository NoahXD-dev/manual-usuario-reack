import { Handle, Position } from '@xyflow/react';

export default function DefaultNode({ data }) {
    return (
        <div className="text-sm font-bold">
            <Handle type="target" position={Position.Top} />
                {data.label}
            <Handle type="source" position={Position.Bottom} />
        </div>
    );
}