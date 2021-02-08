import React from 'react';
import './ActionButton.scss';

interface ActionProp {
    actions: string[];
}


const ActionButton = (props: ActionProp): JSX.Element => {
    return (
        <div className="action-buttons">
            {props.actions.map((action: string, ind: number) => {
                if (ind%2 == 0) {
                    return <button className="action-button" style={{color: '#ECECEB', background: '#3A3D42'}}>{action}</button>
                }
                else {
                    return <button className="action-button" style={{color: '#3A3D42', background: '#ECECEB'}}>{action}</button>
                }
                
            })}
            
        </div>
    );
}

export default ActionButton;