import { Outlet } from "react-router-dom";

import { Cabecalho, Conteudo, Rodape} from "../../components";
const LayoutPadrao = () => {
    return(
        <>
        <Cabecalho nomeUsuario="Otavio" />
            <Conteudo>
                <Outlet />
            </Conteudo>
                <Rodape Criador="Otavio"/>
        </>
    );
};

export { LayoutPadrao };