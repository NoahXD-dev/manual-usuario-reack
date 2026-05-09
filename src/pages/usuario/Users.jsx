import { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, Button, Badge } from "flowbite-react";
import { HiOutlinePencilAlt, HiOutlineTrash  } from "react-icons/hi";
import { userService } from "../../services/userService";
import UserModal from "./UserModal";

function Users() {
    const [isOpen, setIsOpen] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll()
            .then((data) => setUsers(data))
            .catch((err) => console.error(err));
    }, []);

    const handleSaveUser = async (userData) => {
        try {
            const newUser = await userService.create(userData);
            setUsers((prev) => [...prev, newUser]);
            setIsOpen(false);
        } catch (err) {
            console.error(err);
        }
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
                    onClose={() => setIsOpen(false)}
                    onSave={handleSaveUser}
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
                                <Button outline size="xs"><HiOutlinePencilAlt></HiOutlinePencilAlt></Button>

                                <Button color="red" outline size="xs"><HiOutlineTrash></HiOutlineTrash></Button>
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