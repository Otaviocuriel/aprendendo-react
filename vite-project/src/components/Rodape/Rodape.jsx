import style from './Rodape.module.css';

const Rodape = () => {
    const ( Criador ) = props;
    
    const anoAtual = new Date().getFullYear();

    return (
        <div className={style.rodape}>
            
            React Basico - - Criado por: {Criador}
        </div>
    );
};

export Rodape;