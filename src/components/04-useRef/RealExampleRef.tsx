import MultipleCustomHooks from "../03-examples/MultipleCustomHooks"
import { useState } from "react"

const RealExampleRef = () => {
  const [show, setShow] = useState(true)
  return (
    <>
      <h1>RealExampleRef!!!</h1>
      <hr />

      {
        show && <MultipleCustomHooks />
      }
      <button onClick={() => setShow(!show)}>Ocultar</button>
    </>
  )
}

export default RealExampleRef