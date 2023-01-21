// import './App.css'

function App() {
    return (
        <>
        <header className="d-flex">
            <img
                className="col-4 border-radius-5"
                src="img/JX3A6225.jpg"
                alt="Minha foto"
                width="300px"
            />
            <div className="col-6 pl-140">
                <h1 className="desenvolvedor color-g12">Desenvolvedor Full Stack</h1>
                <h2 className="localizacao">Localização: Curitiba, Paraná, Brasil</h2>
            </div>
        </header>
        <div id="experiencia">
            <div className="d-flex">
                <div className="col-5"></div>
                <p className="texticulo color-g9 col-7 float-right max-width-3col">
                    Desenvolvo pequenos projetos utilizando
                    <span className="text-bold"
                    >HTML, Javascript, CSS, PHP, Spring Boot.</span
                    >
                </p>
            </div>

            <div className="d-flex float-right">
                <div className="when col-5 text-align-right">2021</div>
                <div className="what bg-g3 border-g5 col-7 max-width-3col">
                    <div className="primeira-coluna">
                        <div className="card-title color-g10">Pílulas do SUS</div>
                        <div className="card-text color-g10">Healthcare blog.</div>
                    </div>
                    <div className="segunda-coluna">
                        <div className="job-title color-g10">Developer</div>
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
