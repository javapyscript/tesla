import './SideBar.scss';
import useWindowSize from './../../utils/useWindowSize';
import {useEffect} from 'react';

interface SideBarProps {
    sideBarOpen: boolean;
}



const SideBar = (props: SideBarProps): JSX.Element => {
    useEffect(() => {
        function closeSideBar(e: any) {
            if (!document.getElementById('sidebar')?.contains(e.target) && !props.sideBarOpen){
            alert("Clicked outside l2 and logo-menu");
                //document.getElementById('l2').style.height="0px"; //the same code you've used to hide the menu
            } 
        }
        window.addEventListener('click', closeSideBar);
        return () => window.removeEventListener('click', closeSideBar);
    }, []);


    const width = useWindowSize()[0];
    
    return (
        <div className="sidebar-wrapper">
            <div className="sidebar" id="sidebar"></div>
        </div>
    );
}

export default SideBar;