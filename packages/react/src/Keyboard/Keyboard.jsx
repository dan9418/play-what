import * as React from "react";
import "./Keyboard.css";
import KeyboardKey, { KeyboardKeyType } from "./KeyboardKey";
import DEFAULT_PROPS from "./Keyboard.defaults";

const BLACK_KEY_INDICES = [0, 2, 4, 5, 7, 9, 11];

// TODO Enforce code reuse
const modulo = (a, b) => {
    return ((a % b) + b) % b;
}

const getKeyboardKeys = (config, viewerWidth) => {
    let keys = [];
    // Safe approximation for scale
    let numWhiteKeys = (config.keyHigh - config.keyLow + 1) * (7 / 12) + 1;

    for (let i = config.keyLow; i <= config.keyHigh; i++) {
        let type = BLACK_KEY_INDICES.includes(modulo(i, 12)) ? KeyboardKeyType.White : KeyboardKeyType.Black;

        keys.push(
            <KeyboardKey
                key={i}
                noteIndex={i}
                minIndex={config.keyLow}
                maxIndex={config.keyHigh}
                scale={viewerWidth / numWhiteKeys}
                type={type}
                concept={config.concept}
            />
        );
    }
    return keys;
}

const Keyboard = ({ style, ...props }) => {

    const config = { ...DEFAULT_PROPS, ...props };

    const [dims, setDims] = React.useState([512, 512]);

    React.useEffect(() => {
        const resetDimensions = (e) => {
            const el = document.getElementById('keyboard');
            setDims([el.clientWidth, el.clientHeight])
        }
        resetDimensions();
        window.addEventListener('resize', resetDimensions);
        return () => window.removeEventListener('resize', resetDimensions);
    }, [])

    return (
        <div className='keyboard' id='keyboard' style={style}>
            {getKeyboardKeys(config, dims[0])}
        </div>
    );
}

export default Keyboard;