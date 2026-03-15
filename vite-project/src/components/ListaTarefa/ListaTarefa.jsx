import { ListaTarefaItem } from "./ListaTarefaItem/ListaTarefaItem";
import { useAppContext } from "../../hooks";
import style from "./ListaTarefa.module.css";


const ListaTarefa = () => {
    const {tarefas} = useAppContext();
    return(
        <ul className={style.ListaTarefa}>
            {!tarefas.length && (<p>
                Não há tarefas cadastradas...
            </p>)}
            {tarefas.map(item =>
                 <ListaTarefaItem
                  key={item.id}
                   id={item.id}
                    nome={item.nome}
                                    /> )}
        </ul>
    );
};

export {ListaTarefa};