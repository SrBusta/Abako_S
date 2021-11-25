

export default function navbar({colors,name,user}) {

    return (
    <div className="grid md:grid-cols-4 grid-cols-2 my-2 w-full">
                <div className="col-start-1 text-left font-semibold text-lg text-white navbar" data-text={`/${name}`}>/{name}</div>
                <div className="col-start-4 text-right"><span className={`text-${colors}-500 font-semibold text-lg`}>Bienvenido</span><span className="hidden md:inline-block">, {user}</span></div>
    </div>)
};
