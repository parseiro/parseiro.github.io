import './App.css';
import {Experiencia} from "./Experiencia.jsx";
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
            <Experiencia/>
            <Formacao/>
            <Contato/>
        </>
    )
}

export default App
