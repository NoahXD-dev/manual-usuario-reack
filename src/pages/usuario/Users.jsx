import { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, Button, Badge } from "flowbite-react";
import { HiOutlinePencilAlt, HiOutlineTrash  } from "react-icons/hi";
import { userService } from "../../services/userService";
import UserModal from "./UserModal";

function Users() {
    const [isOpen, setIsOpen] = useState(false);
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        userService.findAll()
            .then((data) => setUsers(data))
            .catch((err) => console.error(err));
    }, []);

    const handleEdit = (user) => {
        setSelectedUser(user);
        setIsOpen(true);
    };

    const handleSaveUser = async (userData) => {
        try {
            if (selectedUser) {
                // Editar
                const updated = await userService.update(selectedUser.id, userData);
                setUsers((prev) => prev.map((u) => u.id === updated.id ? updated : u));
            } else {
                // Crear
                const newUser = await userService.create(userData);
                setUsers((prev) => [...prev, newUser]);
            }
    
            setIsOpen(false);
            setSelectedUser(null);
        } catch (err) {
            console.error(err);
        }
    };

    const handleDeleteUser = async (user) => {
        try {
            const killed = await userService.kill(user.id);
            setUsers((prev) => prev.filter((u) => u.id !== killed.id));
        } catch (err) {
            console.error(err);
        }
    }

    // Al cerrar, limpia el usuario seleccionado
    const handleClose = () => {
        setIsOpen(false);
        setSelectedUser(null);
    };

    return (
        <>
            <div className="flex pb-4">
                <div className="flex-1">
                    <h1 className="text-white text-2xl">Usuarios</h1>
                </div>
                
                <div className="flex-1 flex justify-end">
                    <Button size="sm" onClick={() => setIsOpen(true)}>
                        Nuevo Usuario
                    </Button>
                </div>

                <UserModal
                    isOpen={isOpen}
                    onClose={handleClose}
                    onSave={handleSaveUser}
                    selectedUser={selectedUser}
                />
            </div>

            <div className="overflow-x-auto">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeadCell>#</TableHeadCell>
                            <TableHeadCell>Nombre Completo</TableHeadCell>
                            <TableHeadCell>Correo</TableHeadCell>
                            <TableHeadCell>Estatus</TableHeadCell>
                            <TableHeadCell>
                                <span className="sr-only">Acciones</span>
                            </TableHeadCell>
                        </TableRow>
                    </TableHead>

                    <TableBody className="divide-y">
                    {users.map((user) => (
                        <TableRow className="border-gray-700 bg-gray-800" key={user.id}>
                            <TableCell className="whitespace-nowrap font-medium text-white">{user.id}</TableCell>
                            <TableCell>{user.nombre} {user.apellido}</TableCell>
                            <TableCell>{user.correo}</TableCell>
                            <TableCell className="text-center">
                                <Badge color="success" size="xs">
                                    Activo
                                </Badge>
                            </TableCell>
                            <TableCell className="flex justify-end w-auto gap-2">
                                <Button outline size="xs" onClick={() => handleEdit(user)}>
                                    <HiOutlinePencilAlt></HiOutlinePencilAlt>
                                </Button>

                                <Button color="red" outline size="xs" onClick={() => handleDeleteUser(user)}>
                                    <HiOutlineTrash></HiOutlineTrash>
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </div>
        </>
    )
}

export default Users