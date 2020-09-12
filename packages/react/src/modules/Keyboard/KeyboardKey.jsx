import * as React from 'react';
import "./Keyboard.css";

// Key dimensions relative to white key width
const KEY__DIMS = {
    WhW_WhH: 4.6875, // White key width to white key height
    WhW_BlW: 0.6250, // White key width to black key width
    WhW_BlH: 2.9688 // White key width to black hey height
}

export const KeyboardKeyType = {
    Black: 'Black',
    White: 'White'
}

const getScaleStyles = (keyType, scale) => {
    switch (keyType) {
        case KeyboardKeyType.White:
            return {
                width: scale + 'px',
                height: KEY__DIMS.WhW_WhH * scale + 'px'
            };
        case KeyboardKeyType.Black:
            return {
                width: KEY__DIMS.WhW_BlW * scale + 'px',
                height: KEY__DIMS.WhW_BlH * scale + 'px',
                right: .5 * KEY__DIMS.WhW_BlW * scale + 'px'
            };
        default:
            return {
                width: '0px',
                height: '0px'
            };
    }
}

const KeyboardKey = ({ noteIndex, type, scale, concept }) => {
    if(!concept) return null;

    let keyColor = (type === KeyboardKeyType.White) ? 'white' : 'black';
    let scaleStyles = getScaleStyles(type, scale);
    let classes = ['keyboard-key', `${keyColor}-key`, keyColor];

    const colorStyles = {};
    const label = '';

    const keyStyles = keyColor === 'white' ? scaleStyles : { ...scaleStyles, ...colorStyles };
    const labelStyles = keyColor === 'white' ? colorStyles : {};

    return (
        <div className={`${keyColor}-key-container`}>
            <div className={classes.join(' ')} style={keyStyles} onClick={() => null}>
                <div className='keyboard-key-label' style={labelStyles}>
                    {label}
                </div>
            </div>
        </div>
    );
}

export default KeyboardKey;
