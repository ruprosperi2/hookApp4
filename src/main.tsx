import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import MainApp from "./components/07-useContext/MainApp"
import { BrowserRouter } from "react-router-dom"
import App from "./App"

const el = document.getElementById("root")!

ReactDOM.createRoot(el).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)