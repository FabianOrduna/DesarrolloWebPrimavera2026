import CalculoFibonacci from "./components/calculos/Fibonacci";
import { Galeria } from "./components/Galeria";
import { ContadorInformador } from "./components/contador-informador/ContadorInformador.jsx/ContadorImformador";
import PantallaConBotonConEstado from "./components/estados-react/PantallaConBotonConEstado";
import PantallaConBotonSinEstado from "./components/estados-react/PantallaConBotonSinEstado";
import { BotonMarca } from "./components/marca/BotonMarca";
function App() {
  return (
    <>
      <div>
        <CalculoFibonacci />
      </div>
      <div>
        <Galeria />
      </div>
      <div>
        <BotonMarca texto="Botón Primario" tipo="primario" />
        <BotonMarca texto="Botón Secundario" tipo="secundario" />
      </div>
      <hr />
      <div>
        <PantallaConBotonSinEstado />
        <PantallaConBotonConEstado />
      </div>
      <div>
        <ContadorInformador />
      </div>
    </>
  );
}

export default App;
