const ListaTarefaItem = (props) => {
    const {nome} = props; 
    return(
        <li>
                {nome}
                                <Botao texto="-" tipo ={TIPO_BOTAO.SEGUNDARIO}/>
                </li>
    );
};

export {ListaTarefaItem};