import {useState} from "react";

const useCounter = (initState: number = 10) => {
    const [state, setState] = useState(initState);

    const increment = () => {
        setState(state + 1)
    }

    const decrement = () => {
        setState(state - 1)
    }

    const reset = () => {
        setState(initState)
    }

    return {
        state,
        increment,
        decrement,
        reset
    }
}

export default useCounter