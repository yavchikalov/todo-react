import { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from "react";

const Time = ({ ...props }: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>): JSX.Element => {
    const [time, setTime] = useState<Date>(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date())
        }, 1000);
        return () => clearInterval(timer);
    }, [])

    return (
        <div
            {...props}
        >
            {time.toLocaleTimeString()}
        </div>
    )
}

export default Time;