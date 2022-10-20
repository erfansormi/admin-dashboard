import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom";

// css
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./reset.css"
import "./index.css"

//components
import App from "./App";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);