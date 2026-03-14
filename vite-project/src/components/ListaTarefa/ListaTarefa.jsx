import { ListaTarefaItem } from "./ListaTarefaItem/ListaTarefaItem";
import style from "./ListaTarefa.module.css";


const ListaTarefa = () => {
    const tarefas = [
        { id: 1, nome: "Estudar React" },
        { id: 2, nome: "Estudar Vite" },
        { id: 3, nome: "Estudar JavaScript" },

    ];
    return(
        <ul className={style.ListaTarefa}>
            {tarefas.map(item => <ListaTarefaItem key={item.id} nome={item.nome} /> )}
        </ul>
    );
};

export {ListaTarefa};