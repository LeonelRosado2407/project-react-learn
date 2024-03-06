import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content'
import { useLocation } from 'react-router-dom';

function FormularioUpdateComponent(){
    const location = useLocation();
    const[idUser , setidUser] = useState();
    const [email, setemail] = useState();
    const [nombre, setnombre] = useState();
    const [edad, setEdad] = useState();
    console.log(location);

    const ObjectForm = {
        _id : idUser,
        name : nombre,
        email : email,
        age : edad
    }

    const opciones= {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(ObjectForm),
    }
    
    const MySwal = withReactContent(Swal)

    const enviarDatos = ()=>{
        console.log(ObjectForm);
        if (email === undefined || email === ''|| nombre === undefined || nombre=== ''|| edad === undefined || edad === '' || idUser === undefined || idUser === '') {
            console.log("Faltan datos");

            MySwal.fire({
                title: <p>Faltan Datos</p>,
                html: <p>Por favor llene los siguientes campos:
                        {email === undefined || email === '' ? ' Email' : ''}
                        {nombre === undefined || nombre === ''? ' Nombre' : ''}
                        {edad === undefined || edad === '' ? ' Edad' : ''}
                        {idUser === undefined || idUser === '' ? ' Id' : ''}
                    </p>,
                icon: 'warning',
                confirmButtonText: 'Ok',
                confirmButtonColor: 'red',
            })
            return;
        }
        fetch(`http://localhost:3000/actualizarUsuario/${idUser}`, opciones)
        .then((response)=>{
            console.log("Enviado");
            if (response.ok) {
                return response.json();
            }
            throw new Error("Error en la llamada a Ajax");
        })
        .then((data)=>{
            MySwal.fire({
                title: <p>Se ha creado Correctamente el Usuario: {nombre}</p>,
                icon: 'success',
                confirmButtonText: 'Ok',
                confirmButtonColor: 'green'
            }).then((result) => {
                if (result.isConfirmed) {
                    // Code to execute when the confirm button is clicked
                    window.location.replace("/mongodbPracticas");
                    // window.location.reload();
                }
            });
            
            console.log(data);
        })
        .catch((error)=>{
            MySwal.fire({
                title: <p>Error al crear al usuario</p>,
                icon: 'error',
                confirmButtonText: 'Ok',
                confirmButtonColor: 'red'
            })
            console.error(error);
        });
    }

return (
        <div className="w-full max-w-[950px] p-4 rounded-lg shadow sm:p-6 md:p-8 bg-gray-800 border-gray-700">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Editar un <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">Usuario</mark></h1>
            <form className="space-y-6">
            <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="_id"
                        id="_id"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=""
                        required
                        onChange={(e)=>{
                            setidUser(e.target.value)
                        }}
                    />
                    <label
                        htmlFor="email"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Id del Registro
                    </label>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                        onChange={(e)=>{
                            setemail(e.target.value)
                        }}
                    />
                    <label
                        htmlFor="email"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Correo Electrónico
                    </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="nombre"                        
                        id="nombre"                        
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                        onChange={(e)=>{
                            setnombre(e.target.value)
                        }}
                    />
                    <label
                        htmlFor="nombre"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Nombre
                    </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="edad"                        
                        id="edad"                        
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                        onChange={(e)=>{
                            setEdad(e.target.value)
                        }}
                    />
                    <label
                        htmlFor="edad"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Edad
                    </label>
                </div>
                <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={()=>{
                    enviarDatos();
                }}
                >
                Submit
                </button>
            </form>
        </div>

    );
}

export default FormularioUpdateComponent;