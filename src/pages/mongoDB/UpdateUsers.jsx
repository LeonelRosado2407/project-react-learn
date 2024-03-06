/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UpdateUser(){
    const [users,setUsers] = useState([]);
    
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3000/getUsuarios');
            const data = await response.json();
            console.log(data);
            setUsers(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    
    return(
        <div className="p-10">
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-10'>
                {users.map((usuario) => (
                    <div key={usuario._id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
 
                        <div className="flex flex-col items-center pb-10">
                            {/* <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={usuario.image} alt={usuario.name} /> */}
                            <h5 className=" p-5 mb-1 text-center text-xl font-medium text-gray-900 dark:text-white">Nombre: <span className="bg-blue-900">{usuario.name}</span></h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Email: {usuario.email}</span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Edad: {usuario.age}</span>
                            <div className="flex mt-4 md:mt-6">
                                <Link to={{
                                    pathname:'/UsuariosMongo/ActualizarUsuario/formulario-update',
                                }}>
                                <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3">Editar</button>
                                </Link>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default UpdateUser;