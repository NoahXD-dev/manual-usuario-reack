import { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, Button, Badge } from "flowbite-react";
import { HiOutlinePencilAlt, HiOutlineTrash  } from "react-icons/hi";
import UserModal from "./UserModal";

const BASE_URL = "http://localhost:3000"

function Users() {
    const [isOpen, setIsOpen] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`${BASE_URL}/usuario`)
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((err) => console.error(err));
    }, []);

    const handleSaveUser = async (userData) => {
        const res = await fetch(`${BASE_URL}/usuario`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });

        const newUser = await res.json();

        setUsers((prev) => [...prev, newUser]);
        
        setIsOpen(false);
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