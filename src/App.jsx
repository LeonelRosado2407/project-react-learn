//router 
import { BrowserRouter,Route,Routes } from "react-router-dom";

//Páginas
import ListUsersMongoComponent from "./components/ListUsersMongoComponent/ListUsersMongoComponent"
import FormularioComponent from "./components/FormularioComponent/FormularioComponent"
import Home from "./pages/Home";
import MongoPracticas from "./pages/mongoDB/MongoPracticas";
import UpdateUser from "./pages/mongoDB/UpdateUsers";
import DeleteUser from "./pages/mongoDB/DeleteUsers";
import FormularioUpdateComponent from "./components/FormularioUpdateComponent/FormularioUpdateComponent";

import NavbarComponent from "./components/NavbarComponent/NavbarComponent";

function App() {
  return (
    
      <div className="bg-gray-800 min-h-screen min-w-full">
        <BrowserRouter>
          <NavbarComponent />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* mongoPracticas */}
            <Route path="/mongodbPracticas" element={<MongoPracticas />} />
            <Route path="/UsuariosMongo" element={<ListUsersMongoComponent />} />
            <Route path="/UsuariosMongo/AgregarUsuario" element={<FormularioComponent />} />
            <Route path="/UsuariosMongo/ActualizarUsuario" element={<UpdateUser />} />
            <Route path="/UsuariosMongo/ActualizarUsuario/formulario-update" element={<FormularioUpdateComponent />} />
            <Route path="/UsuariosMongo/EliminarUsuario" element={<DeleteUser />} />
            {/* finMongoPRacticas */}
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;


