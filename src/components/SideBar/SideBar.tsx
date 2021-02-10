import './SideBar.scss';
import useWindowSize from './../../utils/useWindowSize';



const SideBar = (): JSX.Element => {


    const width = useWindowSize()[0];
    
    return (
        <div className="sidebar">
            
        </div>
    );
}

export default SideBar;