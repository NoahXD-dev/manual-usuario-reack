import { ReactFlow, Background } from '@xyflow/react';
import { Button } from 'flowbite-react';
import '@xyflow/react/dist/style.css';

function DiagramCanvas({ nodes, edges, onNodesChange, onEdgesChange, onConnect, onSave, onAddNode, nodeTypes }) {
    return (
        <div className='flex-1 h-full relative'>
            <div className="absolute top-3 right-3 z-10 flex gap-2">
                <Button size="sm" onClick={onAddNode}>+ Nodo</Button>
                <Button size="sm" color="green" onClick={onSave}>Guardar</Button>
            </div>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
            >
                <Background />
            </ReactFlow>
        </div>
    );
}

export default DiagramCanvas;