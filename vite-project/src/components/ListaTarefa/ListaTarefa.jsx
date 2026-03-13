import { Botao, TIPO_BOTAO } from "../Botao";

import style from "./ListaTarefa";


const ListaTarefa = () => {
    return(
        <ul className={style.ListaTarefa}>
            <li>
                Estudar React
                                <Botao texto="-" tipo ={TIPO_BOTAO.SEGUNDARIO}/>
                </li>
            <li>
                Estudar Vite
                                <Botao texto="-" tipo ={TIPO_BOTAO.SEGUNDARIO}/>

                </li>
            <li>
                Estudar JavaScript
                                <Botao texto="-" tipo ={TIPO_BOTAO.SEGUNDARIO}/>

                </li>
        </ul>
    );
};

export {ListaTarefa};