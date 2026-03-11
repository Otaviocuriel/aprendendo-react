import {Cabecalho , Conteudo, Rodape} from "./components";
import {Inicial} from './pages';

import './App.css';

const App = () => {
  return (
    <>
    <Cabecalho nomeUsuario="Otavio" />
    <Conteudo>
      <Inicial />
    </Conteudo>
    <Rodape Criador="Otavio"/>
    </>
  )
}

export {App} ;
