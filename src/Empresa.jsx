

export default function Empresa({anos, projeto, desc, myRole, technologies}) {

    return (
    <div className="flex">
        <div className="font-fira text-2xl mr-10 mt-5 col-5 text-right">{anos}</div>
        <div className="w-[658px] p-5 rounded-md flex justify-between bg-gray-g3 border border-gray-g5 col-7 max-width-3col">
            <div className="primeira-coluna">
                <div className="card-title color-gray-g10">{projeto}</div>
                <div className="card-text color-gray-10">{desc}</div>
            </div>
            <div className="w-[233px]">
                <div className="job-title color-gray-10">{myRole}</div>
                <ul className="caixinhas">
                    { technologies.map((tec) => <li key={tec} className="caixinha">{tec}</li>)}
                </ul>
            </div>
        </div>
    </div>
    );

}
