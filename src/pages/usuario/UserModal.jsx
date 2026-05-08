import { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Label, TextInput } from "flowbite-react";
import { HiMail, HiUser, HiCalendar } from "react-icons/hi";

export default function UserModal({ isOpen, onClose, onSave }) {
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        correo: "",
        fechaNacimiento: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = () => {
        onSave(formData);
    };

    return (
        <Modal show={isOpen} position="top-center" size="xl" onClose={onClose}>
            <ModalHeader>
                <span className="text-2xl font-bold text-white">Crear Usuario</span>
            </ModalHeader>

            <ModalBody>
                <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="nombre">Nombre</Label>
                            </div>
                            <TextInput id="nombre" type="text" icon={HiUser} placeholder="Nombre" onChange={handleChange} required />
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="apellido">Apellido</Label>
                            </div>
                            <TextInput id="apellido" type="text" icon={HiUser} placeholder="Apellido" onChange={handleChange} required />
                        </div>
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="correo">Correo</Label>
                        </div>
                        <TextInput id="correo" type="email" icon={HiMail} placeholder="correo@correo.com" onChange={handleChange} required />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="fechaNacimiento">Fecha de nacimiento</Label>
                        </div>
                        <TextInput id="fechaNacimiento" type="date" icon={HiCalendar} onChange={handleChange} required />
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