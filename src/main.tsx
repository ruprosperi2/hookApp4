import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import SimpleForm from "./components/02-useEffect/SimpleForm";
// import FormWithCustomHook from "./components/02-useEffect/FormWithCustomHook";
// import MultipleCustomHooks from "./components/03-examples/MultipleCustomHooks";
// import HookApp from "./HookApp";
// import CounterApp from "./components/01-useState/CounterApp";
// import CounterWithCustomHook from "./components/01-useState/CounterWithCustomHook";
// import RealExampleRef from "./components/04-useRef/RealExampleRef"
import Memorize from "./components/05-memos/Memorize"

ReactDOM.render(
  <React.StrictMode>
    <Memorize/>
  </React.StrictMode>,
  document.getElementById('root')
)
