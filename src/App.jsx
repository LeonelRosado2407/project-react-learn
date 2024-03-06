//router 
import { BrowserRouter,Route,Routes } from "react-router-dom";

//Páginas
import ListUsersMongoComponent from "./components/ListUsersMongoComponent/ListUsersMongoComponent"
import FormularioComponent from "./components/FormularioComponent/FormularioComponent"
import Home from "./pages/Home";
import MongoPracticas from "./pages/MongoPRacticas";

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
            {/* finMongoPRacticas */}
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;


