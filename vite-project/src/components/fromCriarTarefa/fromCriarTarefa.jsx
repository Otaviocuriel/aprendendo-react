import { useState } from "react";
import { Botao, CampoTexto, Loading } from "../../components";
import { useAppContext} from "../../hooks"

import style from './fromCriarTarefa.module.css';

const FormCriarTarefa = () => {
    const { adicionarTarefa, loadingCriar } = useAppContext();

const [nomeTarefa, setNomeTarefa] = useState('');

    

    const onChangeNomeTarefa = (event) => {
        setNomeTarefa(event.currentTarget.value);
    };

    const submeterFormulario = async (event) => {
        event.preventDefault();

        if(!nomeTarefa){
            return;
        }

        await adicionarTarefa(nomeTarefa);
       

        setNomeTarefa('');


    };
    return(
        <form className={style.fromCriarTarefa} onSubmit={submeterFormulario}> 
            <CampoTexto value={nomeTarefa} onChange={onChangeNomeTarefa}/>
            <Botao type="submit" texto={loadingCriar ? <Loading /> : '+'} />
        </form>
    );
};

export { FormCriarTarefa };