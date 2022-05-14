import React, { useMemo, useState } from "react"
import useCounter from "../hooks/useCounter"

const MemoHook = () => {
  const { state, increment } = useCounter(500)
  const [show, setShow] = useState(true)  //un cambio en el esado, provoca nuevamente que se renderice la pagina

  const procesoPesado = (value: number) => {
    let i = 0
    for (i; i <= value; i++) {
      console.log(`me ejecute ${i} veces`)
    }
    return i
  }

  const proceso = useMemo(() => procesoPesado(state), [state])  //ejeceuta procesoPesado siempre yc uando se produzca un cambio en al dependencia [state]


  return (
    <>
      <h1>Valor: {proceso}</h1>
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

export default MemoHook
