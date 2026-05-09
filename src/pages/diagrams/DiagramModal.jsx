import { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Label, TextInput, Select } from "flowbite-react";

const NODE_TYPES = [
    { value: "default", label: "Proceso" },
    { value: "terminal", label: "Terminal" },
    { value: "decision", label: "Decisión" }
];

export default function DiagramModal({ isOpen, onClose, onSave }) {
    const [label, setLabel] = useState("");
    const [selectedType, setSelectedType] = useState("default");

    const handleSubmit = () => {
        if (!label.trim()) return;
        onSave({ label, type: selectedType });
        setLabel("");
        setSelectedType("default");
    };

    return (
        <Modal show={isOpen} position="top-center" size="md" onClose={onClose}>
            <ModalHeader>
                <span className="text-2xl font-bold text-white">Nuevo Nodo</span>
            </ModalHeader>

            <ModalBody>
                <div className="space-y-6">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="label">Etiqueta</Label>
                        </div>
                        <TextInput id="label" type="text" value={label} onChange={(e) => setLabel(e.target.value)} required />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="nodo">Tipo de nodo</Label>
                        </div>
                        <Select id="nodo" onChange={(e) => setSelectedType(e.target.value)} required>
                            {NODE_TYPES.map((type) => (
                                <option key={type.value} value={type.value}>{type.label}</option>
                            ))}
                        </Select>
                    </div>
                </div>
            </ModalBody>

            <ModalFooter>
                <Button color="green" onClick={handleSubmit}>Crear</Button>
                <Button color="gray" onClick={onClose}>Cancelar</Button>
            </ModalFooter>
        </Modal>
    )
}