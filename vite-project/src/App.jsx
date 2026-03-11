import {Cabecalho , Conteudo, Rodape} from "./components";

import './App.css';

const App = () => {
  return (
    <>
    <Cabecalho nomeUsuario="Otavio" />
    <Conteudo>
      <h1>Titulo</h1>
      <p>texto texto texto</p>
    </Conteudo>
    <Rodape Criador="Otavio"/>
    </>
  )
}

export {App} ;
