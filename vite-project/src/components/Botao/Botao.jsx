import {TIPO_BOTAO} from './constants';
import style from './Botao.module.css';

const Botao = (props) => {
    const {texto, tipo= TIPO_BOTAO.PRIMARIO, ...outrasprops } = props;
    return(
        <button className = {style.Botao} type="button" tipo={tipo} {...outrasprops}>
            {texto}
        </button>
    );
};

export {Botao};