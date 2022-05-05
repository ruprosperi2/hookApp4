import React, { useState } from "react"
import useCounter from "../hooks/useCounter"
import Small from "./Small"

const Memorize = () => {
  const { state, increment } = useCounter(1)
  const [show, setShow] = useState(true)  //un cambio en el esado, provoca nuevamente que se renderice la pagina


  return (
    <>
      <Small value={state} />
      <button
        className="btn btn-primary"
        onClick={increment}
      >+1
      </button>

      <button
        className="btn btn-primary"
        onClick={() => setShow(!show)}
      >{JSON.stringify(show)}</button>
    </>
  )
}

export default Memorize

