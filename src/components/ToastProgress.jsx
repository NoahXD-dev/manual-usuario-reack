import { useEffect, useState } from "react";
import { Progress } from "flowbite-react";

export default function ToastProgress({ duration = 3000 }) {
    const [progress, setProgress] = useState(100);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev <= 0) {
                    clearInterval(interval);
                    return 0;
                }
                return prev - (100 / (duration / 100));
            });
        }, 100);

        return () => clearInterval(interval);
    }, [duration]);

    return (
        <Progress
            progress={progress}
            size="sm"
            className="absolute bottom-0 left-0 w-full rounded-none"
            progressLabelPosition="inside"
        />
    );
}