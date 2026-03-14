import {Cabecalho , Conteudo, Rodape} from "./components";
import {Inicial} from './pages';
import { Rounter} from "./Rounter";
import './App.css';
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <Rounter/>
    {/* <Cabecalho nomeUsuario="Otavio" />
    <Conteudo>
      <Inicial />
    </Conteudo>
    <Rodape Criador="Otavio"/> */}
    </BrowserRouter>
  )
};

export {App} ;
