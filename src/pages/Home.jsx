
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen">
        <div className="py-8 px-4 mx-auto max-w-full lg:py-16">

            <div className="bg-gray-800  borderborder-gray-700 rounded-lg p-8 md:p-12 mb-8">
                <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">Bienvenido a mi sitio de prácticas de react</h1>
                <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">Soy Nuevo en react</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">

                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                    <Link to="/mysqlPracticas">
                        <span  className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
                            <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z"/>
                            </svg>
                            Mysql
                        </span>
                    </Link>
                    <div className="flex flex-col items-center">
                        <img className="max-w-md h-auto" src="/src/assets/img/mysqlLogo.png" alt="" />
                    </div>
                    <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Prácticas de Mysql</h2>
                    <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Aqúi se encuentran las prácticas relacionadas con mysql</p>
                    <Link to="/mysqlPracticas">
                        <span className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Vamos
                            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                        </span>
                    </Link>

                </div>

                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                    <Link to="/mongodbPracticas">
                        <span  className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
                            <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"/>
                            </svg>
                            Mongodb
                        </span>
                    </Link>
                    <div className="flex flex-col items-center">
                        <img className="max-w-md h-auto" src="/src/assets/img/mongoLogo.png" alt="" />
                    </div>
                    <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2"> Prácticas de MongoDB</h2>
                    <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                        Aquí se encuentras laas prácticas relacionadas con MongoDB
                    </p>
                    <Link to="/mongodbPracticas">
                        <span href="#" className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Vamos
                            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </span>
                    </Link>

                </div>
            </div>
        </div>
    </section>
  );
}

export default Home;