export function Cabecalho() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-items-stretch">
            <img
                className="col-4 border-radius-5"
                src="../img/JX3A6225.jpg"
                alt="Foto de Leonardo"
                width="300px"
            />
            <div
                className="flex flex-col md:justify-center items-start md:pl-32 md:justify-items-stretch w-screen">
                <h1 className="color-gray-12 text-7xl font-bold">Desenvolvedor Full Stack</h1>
                <h2 className="color-gray-g7 text-2xl font-medium">Localização: Curitiba, Paraná, Brasil</h2>
            </div>
        </div>
    );
}
