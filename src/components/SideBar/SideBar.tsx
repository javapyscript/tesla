import './SideBar.scss';
import useWindowSize from './../../utils/useWindowSize';
import {useEffect} from 'react';

interface SideBarProps {
    sideBarOpen: boolean;
}



const SideBar = (props: SideBarProps): JSX.Element => {
    


    const width = useWindowSize()[0];
    
    return (
        <div className="sidebar-wrapper">
            <div className="sidebar" id="sidebar"></div>
        </div>
    );
}

export default SideBar;