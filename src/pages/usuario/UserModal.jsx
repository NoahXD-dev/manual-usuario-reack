import { useState, useEffect } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Label, TextInput, Datepicker } from "flowbite-react";
import { HiMail, HiUser, HiCalendar } from "react-icons/hi";

export default function UserModal({ isOpen, onClose, onSave, selectedUser }) {
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        correo: "",
        fechaNacimiento: "",
    });

    // const [fechaNacimiento, setFechaNacimiento] = useState(null);

    useEffect(() => {
        if (selectedUser) {
            setFormData(selectedUser);
            // setFechaNacimiento(selectedUser.fechaNacimiento ? new Date(selectedUser.fechaNacimiento) : null);
        } else {
            setFormData({ nombre: "", apellido: "", correo: "", fechaNacimiento: "" });
            // setFechaNacimiento(null);
        }
    }, [selectedUser]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = () => {
        /* onSave({
            ...formData,
            fechaNacimiento: fechaNacimiento?.toISOString().split("T")[0], // "2000-01-25"
        }); */

        onSave(formData);
    };

    // <Datepicker language="es" labelTodayButton="Hoy" labelClearButton="Limpiar" value={fechaNacimiento} onChange={(date) => setFechaNacimiento(date)} popupProps={{style: { zIndex: 9999 }}} />

    return (
        <Modal show={isOpen} position="top-center" size="xl" onClose={onClose}>
            <ModalHeader>
                <span className="text-2xl font-bold text-white">{selectedUser ? "Editar Usuario" : "Crear Usuario"}</span>
            </ModalHeader>

            <ModalBody>
                <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="nombre">Nombre</Label>
                            </div>
                            <TextInput id="nombre" type="text" icon={HiUser} placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="apellido">Apellido</Label>
                            </div>
                            <TextInput id="apellido" type="text" icon={HiUser} placeholder="Apellido" value={formData.apellido} onChange={handleChange} required />
                        </div>
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="correo">Correo</Label>
                        </div>
                        <TextInput id="correo" type="email" icon={HiMail} placeholder="correo@correo.com" value={formData.correo} onChange={handleChange} required />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="fechaNacimiento">Fecha de nacimiento</Label>
                        </div>
                        <TextInput id="fechaNacimiento" type="date" icon={HiCalendar} onChange={handleChange} value={formData.fechaNacimiento} required />
                    </div>
                </div>
            </ModalBody>

            <ModalFooter>
                <Button color="green" onClick={handleSubmit}>{selectedUser ? "Guardar" : "Crear"}</Button>

                <Button color="gray" onClick={onClose}>Cancelar</Button>
            </ModalFooter>
        </Modal>
    )
}