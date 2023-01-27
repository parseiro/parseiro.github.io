import foto from "./assets/JX3A6225.jpg";
import React from "react";

export function Introducao() {
    return (
        <div className="flex flex-col items-center justify-items-stretch lg:grid lg:grid-cols-12 lg:gap-10">
            <img
                className="md:col-span-4"
                src={foto}
                alt="Foto de Leonardo"
            />
            <div className="col-span-6 lg:col-start-6 lg:col-end-11">
                <h1 className="font-fira text-gray-g12 text-7xl font-bold leading-[5rem]">Desenvolvedor Full
                    Stack</h1>
                <h2 className="font-fira text-gray-g7 text-2xl font-medium">Localização: Curitiba, Brasil</h2>
            </div>
        </div>
    );
}
