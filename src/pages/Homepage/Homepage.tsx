import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import HeroPage from '../../components/HeroPage/HeroPage';
import './Homepage.scss';

const pages = [
    {
        title: "Model 3", description: "0% Company Car Tax. <u>Learn More</u>", buttons: ["Custom Order", "Available Inventory"], secAction: "Schedule a Virtual Consultation"
    }, 
    {
        title: "Model S", description: "0% Company Car Tax.", buttons: ["Custom Order", "Available Inventory"], secAction: null
    }, 
    {
        title: "Solar and Powerwall", description: "Power Everything", buttons: ["Learn More"], secAction: null
    }, 
    {
        title: "Model X", description: "0% Company Car Tax.", buttons: ["Custom Order", "Available Inventory"], secAction: null
    }, 
    {
        title: "Model Y", description: "", buttons: ["Learn More"], secAction: null
    },
    {
        title: "Accessories", description: "", buttons: ["Shop Now"], secAction: null
    }
];


const Homepage = (): JSX.Element => {
    const [pageIndex, setPageIndex] = useState(0);
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
            <Navbar></Navbar>
            <div className="hero-pages">
                <HeroPage index={0}></HeroPage>
                <HeroPage index={1}></HeroPage>
                <HeroPage index={2}></HeroPage>
                <HeroPage index={3}></HeroPage>
                <HeroPage index={4}></HeroPage>
                <HeroPage index={5}></HeroPage>
            </div>
        </div>
    );
}

export default Homepage;