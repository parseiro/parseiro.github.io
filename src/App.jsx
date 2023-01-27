import './App.css';
import {Portfolio} from "./Portfolio.jsx";
import Menu from "./Menu.jsx";
import React from "react";
import {Formacao} from "./Formacao.jsx";
import {Introducao} from "./Introducao.jsx";
import {Contato} from "./Contato.jsx";

function App() {
    return (
        <>
            <Menu/>
            <Introducao/>
            <Portfolio/>
            <Formacao/>
            <Contato/>
            <div className="mb-[120px]"></div>
        </>
    )
}

export default App
