import style from './Rodape.module.css';

const Rodape = (props) => {
    const {Criador} = props;
    const anoAtual = (new Date()).getFullYear();

    return (
        <div className={style.Rodape}>
           React Basico -{anoAtual} - {Criador}
        </div>

    );
};
export {Rodape} ;