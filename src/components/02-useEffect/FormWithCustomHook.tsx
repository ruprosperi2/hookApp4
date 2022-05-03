import useForm from "../hooks/useForm";

const FormWithCustomHook = () => {
    const [formValues, handleInputChange, handleSubmit] = useForm({
        name: '',
        email: '',
        password: ''
    })

    const {name, email, password} = formValues

    return (
        <form onSubmit={handleSubmit}>
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

            <div className="form-group">
                <input
                    autoComplete="off"
                    className="form-control"
                    name="password"
                    onChange={handleInputChange}
                    placeholder="***"
                    type="password"
                    value={password}
                />
            </div>

            <button
                type="submit"
                className="btn btn-primary"
            >Guardar
            </button>
        </form>
    )
}

export default FormWithCustomHook