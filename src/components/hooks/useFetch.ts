import axios from "axios";
import {useEffect, useState} from "react";

const useFetch = (url: string) => {
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: true
    });

    useEffect(() => {
        setState({
            data: null,
            loading: true,
            error: true
        })
        axios.get(url)
            .then(res => {
                setState({
                    data: res.data,
                    loading: false,
                    error: false
                })
            })
    }, [url]);

    return state

}

export default useFetch