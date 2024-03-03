import TablaUsersComponent from "./components/tablaUsersComponent/tablaUsersComponent";
import ContadorComponent from "./components/contadorComponent/contadorComponent";
import ApirestComponent from "./components/apirestComponent/apirestComponent";
import ListUsersMongoComponent from "./components/ListUsersMongoComponent/ListUsersMongoComponent";
import FomrularioComponent from "./components/FormularioComponent/FormularioComponent";
function App() {


  return (
    <div className=" min-w-screen min-h-screen bg-gray-900 p-10 flex flex-col justify-center items-center">
      {/* <TablaUsersComponent></TablaUsersComponent> */}
      {/* <ContadorComponent></ContadorComponent> */}
      {/* <ApirestComponent></ApirestComponent> */}
      <FomrularioComponent></FomrularioComponent>
      <ListUsersMongoComponent></ListUsersMongoComponent>

      
    </div>
  );
}

export default App;


