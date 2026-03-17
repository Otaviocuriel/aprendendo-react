import {TIPO_BOTAO} from './constants';
import style from './Botao.module.css';

const Botao = (props) => {
    const {texto, tipo= TIPO_BOTAO.PRIMARIO, type = "button", ...outrasprops } = props;
    return(
        <button className = {style.Botao} type={type} tipo={tipo} {...outrasprops}>
            {texto}
        </button>
    );
};

export {Botao};