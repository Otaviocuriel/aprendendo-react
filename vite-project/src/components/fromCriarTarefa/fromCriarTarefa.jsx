import { useState } from "react";
import { Botao, CampoTexto } from "../../components";


import style from './fromCriarTarefa.module.css';

const FormCriarTarefa = (props) => {
const [nomeTarefa, setNomeTarefa] = useState('');

    const { setTarefas } = props;

    const onChangeNomeTarefa = (event) => {
        setNomeTarefa(event.currentTarget.value);
    };

    const adicionarTarefa = (event) => {
        event.preventDefault();

        if(!nomeTarefa){
            return;
        }

        setTarefas(estadoAtual => {
            const novaTarefa = {
                id: estadoAtual.length + 1,
                nome: nomeTarefa,
            };
                return[
                    ...estadoAtual,
                    novaTarefa,
                ];
        });

        setNomeTarefa('');


    };
    return(
        <form className={style.fromCriarTarefa} onSubmit={adicionarTarefa}> 
            <CampoTexto value={nomeTarefa} onChange={onChangeNomeTarefa}/>
            <Botao texto="+" type="submit"/>
        </form>
    );
};

export { FormCriarTarefa };