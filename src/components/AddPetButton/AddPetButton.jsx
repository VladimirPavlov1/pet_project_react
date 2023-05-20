import { PlusIcon, PlusSmallIcon } from './utils/icons';
import { useWindowSize } from 'hooks/useResize';
// import { Btn } from './AddPetBtn.styled';
import { useLocation } from 'react-router-dom';


const AddPetButton = ({text,path}) => {
    
    const location =useLocation();
    const [screenWidth] = useWindowSize();
    
    return (
        <button to={path} state={{from:location}}>
            {screenWidth <768 && <PlusIcon/>}
            {text}
            {screenWidth >=768 && <PlusSmallIcon/>}
        </button>
    );
}

export default AddPetButton;