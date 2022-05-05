import useCounter from "../hooks/useCounter"

const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter(1)
  return (
    <>
      <h1>Counter: {state}</h1>
      <button
        className="btn btn-primary"
        onClick={increment}
      >+1
      </button>
      <button
        className="btn btn-danger"
        onClick={decrement}
      >-1
      </button>

      <button
        className="btn btn-danger"
        onClick={reset}
      >Reset
      </button>
    </>
  )
}

export default CounterWithCustomHook