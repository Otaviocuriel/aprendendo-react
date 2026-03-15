
import {FormCriarTarefa, ListaTarefa} from "../../components";

import style from "./Inicial.module.css";

const Inicial = () => {    
    return(
        <div className={style.inial}>
            <FormCriarTarefa/>
            <ListaTarefa/>
        </div>
    );
};

export {Inicial};

