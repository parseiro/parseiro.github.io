export default function Empresa({anos, projeto, desc, myRole, technologies}) {

    return (
        <>
            <div className="col-start-1 col-end-13 sm:col-end-2 lg:col-end-6 text-2xl leading-5 text-center sm:text-right text-gray-g7 sm:mr-5 lg:mr-10">
                <div className="mt-5">{anos}</div>
            </div>
            <div
                className="col-start-1 sm:col-start-2 lg:col-start-6 col-end-13 rounded-md bg-gray-g3 border border-gray-g5
                grid grid-cols-7">
                <div className="m-5 col-start-1 col-end-5">
                    <div className="font-fira font-bold text-2xl leading-5 mb-5 text-gray-g10">{projeto}</div>
                    <div className="font-fira prose text-gray-g10" dangerouslySetInnerHTML={{ __html: desc }}></div>
                </div>
                <div className="my-5 col-start-5 col-end-8">
                    <div className="job-title text-gray-g10">{' '}</div>
                    <ul className="caixinhas">
                        {technologies.map((tec) => <li key={tec} className="caixinha">{tec}</li>)}
                    </ul>
                </div>
            </div>
        </>
    );

}
