import { Handle, Position } from '@xyflow/react';

export default function DecisionNode({ data }) {
    return (
        <div className='relative w-[120px] h-[70px]'>
            <svg width="120" height="70" viewBox="0 0 120 70">
                <polygon
                    points="60,0 120,35 60,70 0,35"
                    fill="#fff"
                    stroke="#6B7280"
                    strokeWidth="1"
                />
            </svg>

            <div className='absolute flex items-center justify-center inset-0'>
                <span className="text-center font-bold px-2">{data.label}</span>
            </div>

            <Handle type="target" position={Position.Top} />
            <Handle type="source" position={Position.Bottom} id="si" />
            <Handle type="source" position={Position.Right} id="no" />
        </div>
    );
}