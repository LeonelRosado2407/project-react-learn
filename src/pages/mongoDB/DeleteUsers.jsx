import { useState } from "react";
import { useEffect } from "react";

function DeleteUser(){
    const [users,setUsers] = useState([]);

    const opciones= {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        // body: JSON.stringify(ObjectForm),
    }
    
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

    
    const eliminarUser = (userId)=>{
        try {
            fetch(`http://localhost:3000/eliminarUsuario/${userId}`,opciones)
            .then((response)=>{
                console.log(response);
                if (response.ok) {
                    window.location.reload();
                    return response.json();
                }
                
                throw new Error("Error en la llamada a Ajax");

            }).then((data)=>{
                console.log(data);
            })
            .catch((error)=>{
                console.error(error);
            })
        } catch (error) {
            console.error("Error al eliminar",error);
        }
    }


    
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
   
                                <button 
                                onClick={()=>{
                                    eliminarUser(usuario._id);
                                }}
                                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center  border rounded-lg  focus:ring-4 focus:outline-none bg-red-800 text-white border-red-600 hover:bg-red-700 hover:border-red-700 focus:ring-red-700 ms-3">
                                    Eliminar
                                </button>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DeleteUser;