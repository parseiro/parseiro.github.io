import './App.css';
import {Cabecalho} from "./Cabecalho.jsx";
import {Experiencia} from "./Experiencia.jsx";

const experiencias = [
    {
        ano: '2021',
        projeto: "Pílulas do SUS",
        desc: "Healthcare blog",
        myRole: 'Developer',
        technologies: ['HTML', 'CSS', 'UI', 'Wordpress', 'Instagram', 'Facebook', 'Writing'],
    },
    {
        ano: '2008-2009',
        projeto: "Handy Systems",
        desc: "Múltiplos sistemas pequenos envolvendo e-commerce.",
        myRole: 'Developer',
        technologies: ['HTML', 'PHP', 'Linux', 'MySQL', 'Excel'],
    },
    {
        ano: '2007',
        projeto: "Sascar",
        desc: "Rastreador de frota usando modem 3G",
        myRole: 'Firmware engineer',
        technologies: ['Embedded C', 'TCP/IP', 'Eletrônica'],
    },
    {
        ano: '2006',
        projeto: "Siemens VDO (atual Continental VDO)",
        desc: "Rastreador de frota usando satélite e modem 3G",
        myRole: 'Firmware engineer',
        technologies: ['Embedded C', 'TCP/IP', 'Eletrônica'],
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
            <Cabecalho />
            <Experiencia experiencias={experiencias}/>
        </>
    )
}

export default App
