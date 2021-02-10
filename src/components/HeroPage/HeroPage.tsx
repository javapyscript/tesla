import './HeroPage.scss';
import Title from './Title/Title';
import React, { useRef, useEffect } from "react";
import ActionButton from './ActionButton/ActionButton';

interface HeroProps {
    index: number;
}

const wallpapers = [

];

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


const HeroPage = (props: HeroProps): JSX.Element => {
    const data = pages[props.index];
    const heroPage = useRef<HTMLDivElement>(null);
    return (
        <>
        <div className="hero-page" id={props.index.toString()} ref={heroPage} style={{backgroundImage: "url(images/" + data.wallRoot + "-large.jfif)"}}>
            <Title title={data.title} description={data.description}></Title>
            <ActionButton actions={data.buttons}></ActionButton>
            <div className="sec-action">
                {data.secAction != null && (
                    <span className="sec-text"> 
                        {data.secAction}               
                    </span>
                )}
            </div>
        </div>
        
        </>
    );
}

export default HeroPage;