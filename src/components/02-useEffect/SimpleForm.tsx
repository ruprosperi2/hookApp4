import {FormEvent, useState} from "react";
import Message from "./Message";

const SimpleForm = () => {
    const [state, setState] = useState({
        name: '',
        email: ''
    });

    const handleInputChange = ({target}: FormEvent) => {
        setState({
            ...state,
            [target.name]: target.value
        })
    }

    const {name, email} = state

    return (
        <>
            <h1>UseEffect</h1>
            <hr/>

            <div className="form-group">
                <input
                    autoComplete="off"
                    className="form-control"
                    name="name"
                    onChange={handleInputChange}
                    placeholder="Nombre"
                    type="text"
                    value={name}
                />
            </div>

            <div className="form-group">
                <input
                    autoComplete="off"
                    className="form-control"
                    name="email"
                    onChange={handleInputChange}
                    placeholder="Correo"
                    type="text"
                    value={email}
                />
            </div>
            {
                (name === '123' && <Message/>)
            }
        </>
    )
}

export default SimpleForm