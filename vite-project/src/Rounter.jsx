import {Rountes} from 'react-router-dom';
import {Inicial} from './pages';
import { SobreNos } from './pages/SobreNos';



const Rounter = () => {
    return(
        <Rounter>
            <Rounte path="/" element={<Inicial/>}/>
            <Rounte path="/Sobre-nos" element={<SobreNos/>}/>

        </Rounter>
    );
};

export {Rounter};