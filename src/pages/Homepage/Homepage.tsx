import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import HeroPage from '../../components/HeroPage/HeroPage';
import './Homepage.scss';
import SideBar from '../../components/SideBar/SideBar';
import { CSSTransition } from "react-transition-group";

const pages = [
    {
        title: "Model 3", description: "0% Company Car Tax. <u>Learn More</u>", buttons: ["Custom Order", "Available Inventory"], secAction: "Schedule a Virtual Consultation", wallRoot: "model3",
    }, 
    {
        title: "Model S", description: "0% Company Car Tax.", buttons: ["Custom Order", "Available Inventory"], secAction: null, wallRoot: "modelS",
    }, 
    {
        title: "Solar and Powerwall", description: "Power Everything", buttons: ["Learn More"], secAction: null, wallRoot: "solar",
    }, 
    {
        title: "Model X", description: "0% Company Car Tax.", buttons: ["Custom Order", "Available Inventory"], secAction: null, wallRoot: "modelX",
    }, 
    {
        title: "Model Y", description: "", buttons: ["Learn More"], secAction: null, wallRoot: "modelY",
    },
    {
        title: "Accessories", description: "", buttons: ["Shop Now"], secAction: null, wallRoot: "accessories",
    }
];


const Homepage = (): JSX.Element => {
    const [sideBarOpen, setSideBarOpen] = useState(false);
    function openSideBar() {
        if (sideBarOpen) {
            document.getElementById("hamburger")?.classList.remove("open");
            //document.getElementById("sidebar")?.classList.remove("open");
            setSideBarOpen(false);
        }
        else {
            document.getElementById("hamburger")?.classList.add("open");
            //document.getElementById("sidebar")?.classList.add("open");
            setSideBarOpen(true);
        }
        
        
    }
    /*useEffect(() => {
        window.addEventListener('wheel', scroller, {passive: false});
        return () => window.removeEventListener("wheel", scroller );
    });
    useEffect(() => {
        console.log(pageIndex);
        (document.getElementById(pageIndex.toString()) as any).scrollIntoView();
    }, [pageIndex]);

    const scroller = (e: any) => {
        e.preventDefault();
        console.log(pageIndex, e);
        if (e.deltaY < 0 && pageIndex > 0) {
            setPageIndex(pageIndex - 1);
        }
        else if (pageIndex < pages.length - 1) {
            setPageIndex(pageIndex + 1);
        }
    }*/
    return (
        <div className="homepage">
            <Navbar sideBarOpen={sideBarOpen}></Navbar>
            <div className="hero-pages">
                {pages.map((page, index) => {
                    return <HeroPage sideBarOpen={sideBarOpen} index={index}></HeroPage>
                })}
                
            </div>
            <div id="hamburger" className="hamburger" onClick={openSideBar}>
                <div className="first-line line"></div>
                <div className="second-line line"></div>
                <div className="third-line line"></div>
            </div>
            {sideBarOpen && (
                
                <SideBar></SideBar>
            )}
                
            
        </div>
    );
}

export default Homepage;