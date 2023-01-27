import './Header.css';

function Header() {
    return (<>
        <header className="opacity-70 font-fira">
            <nav className="rounded bg-gray-g1 px-2 py-10 sm:px-4">
                <div className="container mx-auto flex flex-wrap items-center justify-between text-gray-g12">
                    <p className="font-bold text-5xl leading-[60px]">Leonardo</p>
                    <button
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="ml-3 inline-flex items-center rounded-lg p-2 text-lg text-g12 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 sm:hidden"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Abrir menu principal</span>
                        <svg
                            className="h-6 w-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </button>
                    <div className="hidden w-full sm:block sm:w-auto" id="navbar-default">
                        <ul className="flex justify-between flex-wrap text-lg sm:gap-x-12 font-medium">
                            <li className="current-menu-item">
                                <a
                                    href="#portfolio"
                                    className="navbar-item"
                                    aria-current="page"
                                >Portfólio</a
                                >
                            </li>
                            <li>
                                <a href="#formacao" className="navbar-item">Formação</a>
                            </li>
                            <li>
                                <a href="#contato" className="navbar-item">Contato</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    </>);
}

export default Header;
