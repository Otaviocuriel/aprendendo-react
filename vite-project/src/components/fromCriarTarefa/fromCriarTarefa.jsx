import { Botao, CampoTexto } from "../../components";
import style from './fromCriarTarefa.module.css';

const FormCriarTarefa = () => {
    return(
        <form className={style.fromCriarTarefa}> 
            <CampoTexto />
            <Botao texto="+"/>
        </form>
    );
};

export { FormCriarTarefa };