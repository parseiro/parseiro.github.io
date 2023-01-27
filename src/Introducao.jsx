import foto from "./assets/JX3A6225.jpg";
import React from "react";

export function Introducao() {
    return (
        <div className="flex flex-col items-center justify-items-stretch md:grid md:grid-cols-12 md:gap-10 mb-[40px]">
            <img
                className="px-5 md:mx-0 md:col-span-4"
                src={foto}
                alt="Foto de Leonardo"
            />
            <div className="lg:col-start-6 md:col-span-6 ">
                <h1 className="font-fira text-gray-g12 text-7xl font-bold leading-[5rem]">Desenvolvedor Full
                    Stack</h1>
                <h2 className="font-fira text-gray-g7 text-2xl font-medium">Localização: Curitiba, Brasil</h2>
            </div>
            <p className="font-fira text-2xl font-medium leading-10 text-gray-g9 col-start-1 col-end-13">
                Desenvolvo pequenos projetos utilizando
                <span
                    className="font-bold text-gray-g10"> HTML, CSS, Javascript, Wordpress, Angular, React, Spring Boot</span>
            </p>
        </div>
    );
}
