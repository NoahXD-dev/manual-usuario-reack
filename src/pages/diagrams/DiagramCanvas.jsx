import { ReactFlow, Background } from '@xyflow/react';
import { Button } from 'flowbite-react';
import '@xyflow/react/dist/style.css';

function DiagramCanvas({ nodes, edges, onNodesChange, onEdgesChange, onConnect, onSave }) {
    return (
        <div style={{ flex: 1, height: '100%', position: 'relative' }}>
            <div className="absolute top-3 right-3 z-10">
                <Button size="sm" onClick={onSave}>Guardar</Button>
            </div>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
            >
                <Background />
            </ReactFlow>
        </div>
    );
}

export default DiagramCanvas;