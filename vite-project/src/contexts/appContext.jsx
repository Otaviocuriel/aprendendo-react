import { createContext, useState} from "react";


export const AppContext = createContext({});

export const AppContextProvider = (props) =>{
    const { children } = props;

    const [criador] = useState('Otavio');

    const [tarefas, setTarefas] = useState([
        { id: 1, nome: "Estudar React" },
        { id: 2, nome: "Estudar Vite" },
        { id: 3, nome: "Estudar JavaScript" },

    ]);

    const adicionarTarefa = (nomeTarefa) => {
         setTarefas(estadoAtual => {
            const novaTarefa = {
                id: estadoAtual.length + 1,
                nome: nomeTarefa,
            };
                return[
                    ...estadoAtual,
                    novaTarefa,
                ];
        });

    };

    const removerTarefa = (idTarefa) => {
        setTarefas(estadoAtual => {
            const tarefasAtualizadas = estadoAtual.filter(tarefa => tarefa.id != idTarefa);

            return [
                ...tarefasAtualizadas, 
            ]
        });

    };

    const editarTarefa = (idTarefa, nomeTarefa) => {
        setTarefas(estadoAtual => {
           const tarefasAtualizadas = estadoAtual.map(tarefa =>{
                return tarefa.id === idTarefa ? {
                     ...tarefa,
                      nome: nomeTarefa
                    } : tarefa;
            });
            return [
                ...tarefasAtualizadas, 
            ]
        });

    };

    return(
        <AppContext.Provider value= {{criador,
         tarefas,
          adicionarTarefa,
           removerTarefa,
            editarTarefa,
           }}>
         {children}   
        </AppContext.Provider>
    );

};  