export function Contato() {
    return (
        <div id="contato"
             className="font-fira flex flex-col items-end gap-y-7 md:grid
             md:grid-cols-12 md:gap-10 md:items-stretch text-gray-g12">
            <p className="md:col-start-1 md:col-span-6 prose md:prose-xl lg:prose-2xl">
                Estou disponível para novos projetos. Por favor, entre em contato.
            </p>
            <p className="md:col-end-13 md:col-span-6 md:text-right prose md:prose-xl lg:prose-2xl">
                <a href="mailto:leonardo@vilelapinheiro.com" target="_blank">leonardo@vilelapinheiro.com</a><br/>
                <a href="https://wa.me/5543996502757" target="_blank">+55 43 9-9650-2757</a>
            </p>
        </div>
    );
}
