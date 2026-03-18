import { Botao, TIPO_BOTAO, CampoTexto } from "../..";
import { useAppContext } from "../../../hooks";
import { useState } from "react";
import { Loading } from "../../Loading";

import style from "./ListaTarefasItem.module.css";

const ListaTarefaItem = (props) => {
    const { id, nome } = props;

    const [estaEditando, setEstaEditando] = useState(false);

    const {loadingEditar, loadingDeletar,editarTarefa,removerTarefa } = useAppContext();

    const onBlurTarefa = (event) => {
        const nomeTarefa = event.currentTarget.value

        editarTarefa(id, nomeTarefa);
        setEstaEditando(false);
    };

    const loadingEstaEditando = loadingEditar == id;
    const loadingEstaDeletando = loadingDeletar == id;

    return (
        <li className={style.ListaTarefaItem}>

            {(loadingEstaEditando || estaEditando) 
            && (
             <CampoTexto
             defaultValue={nome}
                 onBlur={onBlurTarefa}
              autoFocus
               />
            )}


            {!loadingEstaEditando && !estaEditando
             && (
                            <span onDoubleClick={() => setEstaEditando(true)}>
                {nome}
                            </span>
            )}    
            {loadingEstaEditando &&(
                <Loading />
                )}
            <Botao
                texto={loadingEstaDeletando ? <Loading/> : '-'}
                tipo={TIPO_BOTAO.SEGUNDARIO}
                onClick={() => removerTarefa(id)}
            />

        </li>
    );
};

export { ListaTarefaItem };