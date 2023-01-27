import Empresa from "./Empresa.jsx";

export function Experiencia({experiencias}) {
    return (
        <>
            <div className="flex flex-col items-center justify-items-stretch lg:grid lg:grid-cols-12 lg:gap-10">
                <img
                    className="md:col-span-4"
                    src="../img/JX3A6225.jpg"
                    alt="Foto de Leonardo"
                />
                <div className="col-span-6 lg:col-start-6 lg:col-end-11">
                    <h1 className="font-fira text-gray-g12 text-7xl font-bold leading-[5rem]">Desenvolvedor Full
                        Stack</h1>
                    <h2 className="font-fira text-gray-g7 text-2xl font-medium">Localização: Curitiba, Brasil</h2>
                </div>
            </div>
            <div className="flex flex-col items-end gap-y-7 lg:grid lg:grid-cols-12 lg:gap-10 lg:items-stretch">
                <p className="font-fira text-2xl font-medium text-gray-g9 lg:col-start-6 lg:col-end-12">
                    Desenvolvo pequenos projetos utilizando
                    <span className="font-bold text-gray-g10"> HTML, Javascript, CSS, PHP, Spring Boot.</span>
                </p>

                {experiencias.map((xp, index) => <Empresa key={index} anos={xp.ano} projeto={xp.projeto} desc={xp.desc}
                                                          myRole={xp.myRole} technologies={xp.technologies}/>)}
            </div>
        </>
    );
}
