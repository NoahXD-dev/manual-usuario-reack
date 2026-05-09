const BASE_URL = "http://localhost:3000";

export const userService = {
    findAll: async () => {
        const res = await fetch(`${BASE_URL}/usuario`);
        if (!res.ok) throw new Error("Error al obtener usuarios");
        return res.json();
    },
    
    create: async (userData) => {
        const res = await fetch(`${BASE_URL}/usuario`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
        });
        if (!res.ok) throw new Error("Error al crear usuario");
        return res.json();
    },

    update: async (id, userData) => {
        const res = await fetch(`${BASE_URL}/usuario/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
        });
        if (!res.ok) throw new Error("Error al actualizar usuario");
        return res.json();
    },

    kill: async (id) => {
        const res = await fetch(`${BASE_URL}/usuario/${id}`, {
            method: "DELETE",
        });
        if (!res.ok) throw new Error("Error al eliminar usuario");
        return res.json();
    },
};