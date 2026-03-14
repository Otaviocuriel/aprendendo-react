import { useState } from "react";
import {FormCriarTarefa, ListaTarefa} from "../../components";
import style from "./Inicial.module.css";

const Inicial = () => {
    const [tarefas, setTarefas] = useState([
        { id: 1, nome: "Estudar React" },
        { id: 2, nome: "Estudar Vite" },
        { id: 3, nome: "Estudar JavaScript" },

    ]);
    return(
        <div className={style.inial}>
            <FormCriarTarefa setTarefas={setTarefas}/>
            <ListaTarefa tarefas={tarefas} />
        </div>
    );
};

export {Inicial};

