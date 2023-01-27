import './App.css';
import {Experiencia} from "./Experiencia.jsx";
import Header from "./Header.jsx";
import React from "react";

const experiencias = [
    {
        ano: '2022',
        projeto: "Leitões Grill",
        desc: "<a href='https://deliciasdacarn8.wixsite.com/meusite/' target='_blank' class='underline'>Este website</a> foi refeito <a href='https://parseiro.github.io/leitoesGrill' target='_blank' class='underline'>desta forma</a>",
        myRole: 'Developer',
        technologies: ['HTML', 'CSS', 'Tailwind', 'Flowbite'],
    },
    {
        ano: '2022',
        projeto: "Dognelson",
        desc: "<a href='https://parseiro.github.io/dognelson/' target='_blank' class='underline'>Feira de adoção de cães e gatos</a> com código fonte <a href='https://github.com/parseiro/dognelson' target='_blank' class='underline'>desta forma</a>",
        myRole: 'Developer',
        technologies: ['HTML', 'CSS'],
    },
    {
        ano: '2022',
        projeto: "GFT Bootcamp",
        desc: "<a href='https://github.com/parseiro/spring-gft-starter-leonardo' target='_blank' class='underline'>Esta foi a minha solução</a> para o desafio final do GFT Starter 5 Bootcamp",
        myRole: 'Developer',
        technologies: ['Java', 'Feign', 'Spring Boot', 'REST API', 'Swagger'],
    },
    {
        ano: '2022',
        projeto: "Loja Exemplo",
        desc: "<a href='https://github.com/parseiro/store-jhipster-example' target='_blank' class='underline'>Projeto feito</a> utilizando JHipster",
        myRole: 'Developer',
        technologies: ['HTML', 'CSS', 'Java', 'Angular', 'Spring Boot', 'JHipster', 'PostgreSQL'],
    },
    {
        ano: '2022',
        projeto: "Utilitário Dengue",
        desc: "<a href='https://github.com/parseiro/calculadora-hidratacao-na-dengue' target='_blank' class='underline'>Calculadora de hidratação</a> para médicos",
        myRole: 'Developer',
        technologies: ['HTML', 'CSS', 'Typescript', 'Javascript', 'Angular', 'Bootstrap', 'Angular Material'],
    },
    {
        ano: '2022',
        projeto: "Social Network Wall",
        desc: "<a href='https://github.com/parseiro/social-network-wall' target='_blamk' class='underline'>Projeto acadêmico</a> de uma rede social",
        myRole: 'Developer',
        technologies: ['HTML', 'CSS', 'Typescript', 'Javascript', 'Angular', 'Bootstrap', 'Angular Material'],
    },
    {
        ano: '2022',
        projeto: "Android Agenda",
        desc: "<a href='https://github.com/parseiro/Primeiro-projeto-android/' target-'_blank' class='underline'>App para Android</a> de agenda",
        myRole: 'Developer',
        technologies: ['Java', 'Android Studio'],
    },
    {
        ano: '2021',
        projeto: "Java Swing Agenda",
        desc: "<a href='https://github.com/parseiro/SwingClientServer' target='_blank' class='underline'>Projeto acadêmico</a> usando Swing e TCP/IP.",
        myRole: 'Developer',
        technologies: ['Java', 'Android Studio'],
    },
    {
        ano: '2021',
        projeto: "Pílulas do SUS",
        desc: "Healthcare blog",
        myRole: 'Developer',
        technologies: ['HTML', 'CSS', 'UI', 'Wordpress', 'Instagram', 'Facebook', 'Writing'],
    },
    {
        ano: '2007-2010',
        projeto: "Dobem Software",
        desc: "Na maioria, pequenos envolvendo e-commerce, em PHP e MySQL",
        myRole: 'Developer',
        technologies: ['HTML', 'PHP', 'Linux', 'MySQL', 'Excel'],
    },
    {
        ano: '2007',
        projeto: "Sascar",
        desc: "Rastreador de frota usando modem 3G",
        myRole: 'Firmware engineer',
        technologies: ['Embedded C', 'TCP/IP', 'Eletrônica', 'Redução de custos'],
    },
    {
        ano: '2006',
        projeto: "Siemens",
        desc: "Rastreador de frota usando satélite e modem 3G",
        myRole: 'Firmware engineer',
        technologies: ['Embedded C', 'TCP/IP', 'Eletrônica', 'Redução de custos'],
    },
    {
        ano: '2004-2005',
        projeto: "Conectway",
        desc: "Provedor de internet a rádio",
        myRole: 'Faz tudo',
        technologies: ['Redes com e sem fio', 'Servidores Linux', 'Suporte 2º nível'],
    },
    {
        ano: '1993-2006',
        projeto: "Datamídia Informática",
        desc: "Montagem e venda de computadores",
        myRole: 'Faz tudo',
        technologies: ['Compras', 'Montagem', 'Orçamento', 'Instalação', 'Suporte'],
    },
    {
        ano: '2000-2001',
        projeto: "Bedrock IRC Server",
        desc: "Servidor de Internet Relay Chat",
        myRole: 'Developer',
        technologies: ['C', 'TCP/IP', 'MySQL', 'FreeBSD'],
    },
];

function App() {
    return (
        <>
            <Header/>
            <Experiencia experiencias={experiencias}/>
        </>
    )
}

export default App
