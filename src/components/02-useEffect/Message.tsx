import {FormEvent, useEffect, useState} from "react";

const Message = () => {
    const [cords, setCords] = useState({
        x: 0,
        y: 0
    });

    const {x, y} = cords

    useEffect(() => {
        const mouseMove = (e) => {
            console.log(":D")

            const cords = {
                x: e.x,
                y: e.y
            }

            setCords(cords)
        }

        window.addEventListener('mousemove', mouseMove)

        return () => {
            window.removeEventListener('mousemove', mouseMove)
        };
    }, []);


    return (
        <>
            <h1>Message Montado</h1>
            <p>x:{x} y:{y}</p>
        </>
    )
}

export default Message