import { useState, useCallback, useEffect } from 'react';
import { applyNodeChanges, applyEdgeChanges, addEdge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import DiagramList from './DiagramList';
import DiagramCanvas from './DiagramCanvas';
import { diagramService } from '../../services/diagramService';

function Diagram() {
    const [diagrams, setDiagrams] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const [nodes, setNodes] = useState([]);
    const [edges, setEdges] = useState([]);

    // Carga la lista de diagramas
    useEffect(() => {
        diagramService.findAll()
            .then(setDiagrams)
            .catch(console.error);
    }, []);

    // Cuando cambia el seleccionado, carga sus nodos y edges
    useEffect(() => {
        if (!selectedId) return;
        diagramService.findById(selectedId)
            .then((d) => {
                setNodes(d.nodes);
                setEdges(d.edges);
            })
            .catch(console.error);
    }, [selectedId]);

    const handleCreate = async () => {
        const title = prompt("Nombre del diagrama:");
        if (!title) return;
        const newDiagram = await diagramService.create(title);
        setDiagrams((prev) => [...prev, newDiagram]);
        setSelectedId(newDiagram.id);
    };

    const handleDelete = async (id) => {
        await diagramService.kill(id);
        setDiagrams((prev) => prev.filter((d) => d.id !== id));
        if (selectedId === id) {
            setSelectedId(null);
            setNodes([]);
            setEdges([]);
        }
    };

    const handleSave = async () => {
        if (!selectedId) return;
        await diagramService.save(selectedId, nodes, edges);
    };

    const onNodesChange = useCallback(
        (changes) => setNodes((prev) => applyNodeChanges(changes, prev)), []
    );
    const onEdgesChange = useCallback(
        (changes) => setEdges((prev) => applyEdgeChanges(changes, prev)), []
    );
    const onConnect = useCallback(
        (params) => setEdges((prev) => addEdge(params, prev)), []
    );

    return (
        <div style={{ display: 'flex', width: '100%', height: '100%' }}>
            <DiagramList
                diagrams={diagrams}
                selectedId={selectedId}
                onSelect={setSelectedId}
                onCreate={handleCreate}
                onDelete={handleDelete}
            />

            <div style={{ flex: 1, position: 'relative' }}>
                {selectedId ? (
                    <DiagramCanvas
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        onSave={handleSave}
                    />
                ) : (
                    <div className="flex h-full items-center justify-center text-gray-500">
                        Selecciona o crea un diagrama
                    </div>
                )}
            </div>
        </div>
    );
}

export default Diagram;