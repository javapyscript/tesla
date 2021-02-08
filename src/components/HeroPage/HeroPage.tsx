import './HeroPage.scss';
import Title from './Title/Title';
import React, { useRef, useEffect } from "react";
import ActionButton from './ActionButton/ActionButton';

interface HeroProps {
    index: number;
}

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


const HeroPage = (props: HeroProps): JSX.Element => {
    const data = pages[props.index];
    const heroPage = useRef<HTMLDivElement>(null);
    return (
        <>
        <div className="hero-page" id={props.index.toString()} ref={heroPage}>
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
        <hr></hr>
        </>
    );
}

export default HeroPage;