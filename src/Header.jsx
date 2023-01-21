import './Header.css';

function Header() {
    return (<>
        <header>
            <nav className="rounded border-gray-200 bg-white px-2 py-2.5 dark:bg-gray-900 sm:px-4">
                <div className="container mx-auto flex flex-wrap items-center justify-between">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-x-4">
            <span
                className="whitespace-nowrap font-display text-5xl sm:text-3xl md:text-4xl font-bold text-red-500 dark:text-white">
              Leonardo
            </span>
                    </div>

                    <button
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
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
                        <ul
                            className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800 sm:mt-0 sm:flex-row sm:space-x-8 sm:border-0 sm:bg-white sm:text-sm sm:font-medium sm:dark:bg-gray-900"
                        >
                            <li className="current-menu-item">
                                <a
                                    href="#produtos"
                                    className="navbar-item"
                                    aria-current="page"
                                >Produtos</a
                                >
                            </li>
                            <li>
                                <a href="#sobre" className="navbar-item">Sobre</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <div className="navbar mx-auto mb-80 border border-1">
            <ul className="botoes-navbar">
                <li className="mr-auto"><h1 className="d-inline logotipo">Leonardo</h1></li>
                <li className="ml-auto btn">Experiência</li>
                <li className="btn">Formação</li>
                <li className="btn">Contato</li>
            </ul>
        </div>
    </>);
}

export default Header;
