// import './App.css'

function App() {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-items-stretch">
                <img
                    className="col-4 border-radius-5"
                    src="../img/JX3A6225.jpg"
                    alt="Foto de Leonardo"
                    width="300px"
                />
                <div
                    className="flex flex-col md:justify-center items-start border md:pl-32 border-1 md:justify-items-stretch w-screen">
                    <h1 className="color-gray-12 text-7xl font-bold">Desenvolvedor Full Stack</h1>
                    <h2 className="color-gray-g7 text-2xl font-medium">Localização: Curitiba, Paraná, Brasil</h2>
                </div>
            </div>
            <div id="experiencia">
                <div className="sm:flex sm:justify-end">
                    <p className="font-fira text-2xl font-medium color-gray-g9 col-7 float-right max-width-3col max-w-[600px]">
                        Desenvolvo pequenos projetos utilizando
                        <span className="font-bold color-gray-g10"> HTML, Javascript, CSS, PHP, Spring Boot.</span
                        >
                    </p>
                </div>

                <div className="flex float-right">
                    <div className="when col-5 text-align-right">2021</div>
                    <div className="what bg-g3 border-g5 col-7 max-width-3col">
                        <div className="primeira-coluna">
                            <div className="card-title color-gray-10">Pílulas do SUS</div>
                            <div className="card-text color-gray-10">Healthcare blog.</div>
                        </div>
                        <div className="segunda-coluna">
                            <div className="job-title color-gray-10">Developer</div>
                            <ul className="caixinhas">
                                <li className="caixinha">HTML</li>
                                <li className="caixinha">CSS</li>
                                <li className="caixinha">UI Design</li>
                                <li className="caixinha">Wordpress</li>
                                <li className="caixinha">Instagram</li>
                                <li className="caixinha">Facebook</li>
                                <li className="caixinha">Author</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
