const BASE_URL = import.meta.env.VITE_API_URL;

export const diagramService = {
    findAll: async () => {
        const res = await fetch(`${BASE_URL}/diagrama`);
        if (!res.ok) throw new Error("Error al obtener diagramas");
        return res.json();
    },

    findById: async () => {
        const res = await fetch(`${BASE_URL}/diagrama/${id}`);
        if (!res.ok) throw new Error("Error al obtener diagrama");
        return res.json();
    },

    create: async (title) => {
        const res = await fetch(`${BASE_URL}/diagrama`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title,
                nodes: [],
                edges: [],
                updatedAt: new Date().toISOString().split("T")[0],
            }),
        });
        if (!res.ok) throw new Error("Error al crear diagrama");
        return res.json();
    },

    save: async (id, nodes, edges) => {
        const res = await fetch(`${BASE_URL}/diagrama/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                nodes,
                edges,
                updatedAt: new Date().toISOString().split("T")[0],
            }),
        });
        if (!res.ok) throw new Error("Error al guardar diagrama");
        return res.json();
    },

    kill: async (id) => {
        const res = await fetch(`${BASE_URL}/diagrama/${id}`, { method: "DELETE" });
        if (!res.ok) throw new Error("Error al eliminar diagrama");
        return res.json();
    },
}