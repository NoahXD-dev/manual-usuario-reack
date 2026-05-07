import { useState, useCallback, useEffect } from 'react';
import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge, Background } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const BASE_URL = "http://localhost:3000";

function Diagram() {
    const [nodes, setNodes] = useState([]);
    const [edges, setEdges] = useState([]);

    useEffect(() => {
        fetch(`${BASE_URL}/nodos`)
            .then(res => res.json())
            .then(data => setNodes(data))
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        fetch(`${BASE_URL}/edges`)
            .then(res => res.json())
            .then(data => setEdges(data))
            .catch(err => console.error(err));
    }, []);

    const onNodesChange = useCallback(
        (changes) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
        [],
    );

    const onEdgesChange = useCallback(
        (changes) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
        [],
    );

    const onConnect = useCallback(
        (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
        [],
    );

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect}>
                <Background />
            </ReactFlow>
        </div>        
    )
}

export default Diagram;