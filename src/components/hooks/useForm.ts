import {FormEvent, useState} from "react";

const useForm = (initialState = {}) => {
    const [formValues, setForm] = useState(initialState);

    const handleInputChange = ({target}: FormEvent) => {
        setForm({
            ...formValues,
            [target.name]: target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return [formValues, handleInputChange, handleSubmit]
}

export default useForm