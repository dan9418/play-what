import * as React from "react";
import Core from '@pw/core';
//import "./Keyboard.css";

const Label = ({ color, text, userStyles }) => {

    const bg = color ? color : null;
    const fg = color ? Core.Color.getFgColor(bg) : null;

    const styles = {
        position: 'absolute',
        width: '90%',
        height: '90%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '100%',
        ...userStyles
    };

    return (
        <div className='label' style={styles}>
            {text}
        </div>
    );
}

export default Label;
