import { useState } from "react";

export function useToast() {
    const [toasts, setToasts] = useState([]);

    const showToast = (message, type = "success") => {
        const id = Date.now();
        setToasts((prev) => [...prev, { id, message, type }]);
        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, 3000);
    };

    return {
        toasts,
        success: (message) => showToast(message, "success"),
        error: (message) => showToast(message, "error")
    };
}