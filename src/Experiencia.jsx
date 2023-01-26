import Empresa from "./Empresa.jsx";

export function Experiencia({experiencias}) {
    return (
        <div className="flex flex-col items-end gap-y-7">
            <div className="sm:flex sm:justify-end mb-[10px] sm:max-w-[600px]">
                <p className="font-fira text-2xl font-medium color-gray-g9 col-7 max-w-[600px]">
                    Desenvolvo pequenos projetos utilizando
                    <span className="font-bold color-gray-g10"> HTML, Javascript, CSS, PHP, Spring Boot.</span
                    >
                </p>
            </div>

            {experiencias.map((xp, index) => <Empresa key={index} anos={xp.ano} projeto={xp.projeto} desc={xp.desc}
                                                      myRole={xp.myRole} technologies={xp.technologies}/>)}
        </div>
    );
}
