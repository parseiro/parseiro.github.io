export function Contato() {
    return (
        <div id="contato"
             className="font-fira text-4xl text-gray-g12 leading-[60px] flex flex-col items-end gap-y-7 lg:grid
             lg:grid-cols-12 lg:gap-10 lg:items-stretch mb-[120px]">
            <p className="lg:col-start-1 lg:col-span-6">
                Estou disponível para novos projetos. Por favor, entre em contato.
            </p>
            <p className="lg:col-end-13 lg:col-span-6 lg:text-right">
                <a href="mailto:leonardo@vilelapinheiro.com" target="_blank">leonardo@vilelapinheiro.com</a><br/>
                <a href="https://wa.me/5543996502757" target="_blank">+55 43 9-9650-2757</a>
            </p>
        </div>
    );
}
