import { Outlet } from "react-router-dom";

import { Cabecalho, Conteudo, Rodape} from "../../components";
import { useAppContext } from "../../hooks";


const LayoutPadrao = () => {

   const { criador } = useAppContext();

    return(
        <>
        <Cabecalho nomeUsuario="Otavio" />
            <Conteudo>
                <Outlet />
            </Conteudo>
                <Rodape Criador={criador}/>
        </>
    );
};

export { LayoutPadrao };