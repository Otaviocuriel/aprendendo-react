import { useState } from "react";
import { Botao, CampoTexto } from "../../components";
import { useAppContext} from "../../hooks"

import style from './fromCriarTarefa.module.css';

const FormCriarTarefa = () => {
    const {adicionarTarefa}= useAppContext();

const [nomeTarefa, setNomeTarefa] = useState('');

    

    const onChangeNomeTarefa = (event) => {
        setNomeTarefa(event.currentTarget.value);
    };

    const submeterFormulario = (event) => {
        event.preventDefault();

        if(!nomeTarefa){
            return;
        }


        adicionarTarefa(nomeTarefa);
       

        setNomeTarefa('');


    };
    return(
        <form className={style.fromCriarTarefa} onSubmit={submeterFormulario}> 
            <CampoTexto value={nomeTarefa} onChange={onChangeNomeTarefa}/>
            <Botao texto="+" type="submit"/>
        </form>
    );
};

export { FormCriarTarefa };