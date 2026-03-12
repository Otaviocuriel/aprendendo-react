import style from './CampoTexto.module.css';

const CampoTexto = (props) => {
    return (
        <input type="text"className={style.campoTexto} {...props}/>
    )
};

export { CampoTexto };