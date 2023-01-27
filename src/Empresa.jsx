export default function Empresa({anos, projeto, desc, myRole, technologies}) {

    return (
        <>
            <div className="text-2xl pt-5 text-right lg:col-start-1 lg:col-span-5 text-gray-g7"><span>{anos}</span></div>
            <div
                className="lg:col-start-6 lg:col-span-7 p-5 rounded-md flex justify-between bg-gray-g3 border border-gray-g5 min-h-[222px]
                lg:grid lg:grid-cols-7 lg:gap-10">
                <div className="lg:col-start-1 lg:col-span-4">
                    <div className="font-fira font-bold leading-5 text-2xl mb-5 text-gray-g10">{projeto}</div>
                    <div className="font-fira text-2xl text-gray-g10" dangerouslySetInnerHTML={{ __html: desc }}></div>
                </div>
                <div className="lg:col-start-5 lg:col-span-3">
                    {/*<div className="job-title text-gray-g10">{myRole}</div>*/}
                    <ul className="caixinhas">
                        {technologies.map((tec) => <li key={tec} className="caixinha">{tec}</li>)}
                    </ul>
                </div>
            </div>
        </>
    );

}
