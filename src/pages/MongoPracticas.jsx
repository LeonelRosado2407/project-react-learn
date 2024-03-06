import { Link } from "react-router-dom";

function MongoPracticas() {
  return (
    <div className="p-10 w-full min-h-screen">
      <div className="grid grid-cols-2 gap-8">
        {/* get */}
        <div>
          <div className="w-full rounded-lg shadow bg-gray-700 ">
            <div className="flex flex-col items-center p-10">
                <img className="rounded-t-lg w-full" src="/src/assets/img/champs/pantheon.jpg" alt="" />
            </div>
    
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Práctica de Consultar Usuarios consumiendo una API de MongoDB
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Usando el Get
                </p>
                <Link to="/UsuariosMongo">
                    <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                        Consultar Usuarios
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </span>
                </Link>
            </div>
          </div>
        </div>
        {/* post */}
        <div>
            <div className="w-full rounded-lg shadow bg-gray-700 ">
                <div className="flex flex-col items-center p-10">
                    <img className="rounded-t-lg w-full" src="/src/assets/img/champs/ezreal.jpg" alt="" />
                </div>
        
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Práctica de Consultar Usuarios consumiendo una API de MongoDB
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Usando el Get
                    </p>
                    <Link to="/UsuariosMongo/AgregarUsuario">
                        <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Consultar Usuarios
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
        {/* put */}
        <div>
            <div className="w-full rounded-lg shadow bg-gray-700 ">
                <div className="flex flex-col items-center p-10">
                    <img className="rounded-t-lg w-full" src="/src/assets/img/champs/wukong.jpg" alt="" />
                </div>
        
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Práctica de Consultar Usuarios consumiendo una API de MongoDB
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Usando el Get
                    </p>
                    <Link to="/UsuariosMongo">
                        <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">
                            Consultar Usuarios
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
        {/* delete */}
        <div>
            <div className="w-full rounded-lg shadow bg-gray-700 ">
                <div className="flex flex-col items-center p-10">
                    <img className="rounded-t-lg w-full" src="/src/assets/img/champs/mordekaiser.jpg" alt="" />
                </div>
        
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Práctica de Consultar Usuarios consumiendo una API de MongoDB
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Usando el Get
                    </p>
                    <Link to="/UsuariosMongo">
                        <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                            Consultar Usuarios
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
        
      </div>
    </div>
  );
}

export default MongoPracticas;