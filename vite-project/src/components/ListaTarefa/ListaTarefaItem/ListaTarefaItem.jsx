import { Botao, TIPO_BOTAO, CampoTexto } from "../..";
import { useAppContext } from "../../../hooks";
import { useState } from "react";

import style from "./ListaTarefasItem.module.css";

const ListaTarefaItem = (props) => {
    const { id, nome } = props;

    const [estaEditando, setEstaEditando] = useState(false);

    const { removerTarefa } = useAppContext();

    return (
        <li className={style.ListaTarefaItem}>

            {estaEditando && <CampoTexto />}

            {!estaEditando && <span>{nome}</span>}

            <Botao
                texto="-"
                tipo={TIPO_BOTAO.SEGUNDARIO}
                onClick={() => removerTarefa(id)}
            />

        </li>
    );
};

export { ListaTarefaItem };