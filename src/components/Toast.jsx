import { Toast, ToastToggle } from "flowbite-react";
import { HiCheck, HiX } from "react-icons/hi";
import ToastProgress from "./ToastProgress";

const ICONS = {
    success: { icon: HiCheck, bg: "bg-green-800 text-green-200" },
    error: { icon: HiX, bg: "bg-red-800 text-red-200" }
}

export default function ToastTemplate({ toasts }) {
    return (
        <div className="fixed inset-x-0 top-0 flex flex-col gap-2 items-center">
            {toasts.map((toast) => {
                const { icon: Icon, bg } = ICONS[toast.type];

                return (
                    <Toast className="relative" key={toast.id}>
                        <div className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${bg}`}>
                            <Icon className="h-5 w-5" />
                        </div>

                        <div className="pl-4 text-sm font-normal">{toast.message}</div>
                        <ToastToggle />

                        <ToastProgress duration={3000} />
                    </Toast>
                )
            })}
        </div>
    )
}