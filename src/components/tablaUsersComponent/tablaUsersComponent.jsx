/* eslint-disable react-hooks/rules-of-hooks */

import { useState } from 'react';
import axios from 'axios';

function tablaUsersComponent() {
  const [users, setUsers] = useState([]);

  const axiosData = async ()=>{
    axios.get('http://localhost:3000/getUsers').
    then((response)=>{
      setUsers(response.data);
      console.log(response.data);
    }).catch((error)=>{
      console.error(`Error fetching data: ${error}`);

    });
  }
  // axiosData();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="overflow-hidden sm:rounded-md">
        <h1 className="text-2xl font-semibold">Lista de Usuarios</h1>
        <button onClick={()=>{
          axiosData();
        }}>Obtener Lista</button>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.user_id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {user.user_id}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {user.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {user.email}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default tablaUsersComponent;


