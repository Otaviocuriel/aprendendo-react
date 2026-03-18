import { ListaTarefaItem } from "./ListaTarefaItem/ListaTarefaItem";
import { useAppContext } from "../../hooks";
import { Loading } from "../Loading";
import style from "./ListaTarefa.module.css";


const ListaTarefa = () => {
    const { tarefas, loadingCarregar } = useAppContext();
    return(
        <ul className={style.ListaTarefa}>
            {loadingCarregar && <p>Carregando tarefas...<Loading /></p>}
            {!loadingCarregar && !tarefas.length && (<p>
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