import * as React from "react";
import "./Keyboard.css";
import KeyboardKey, { KeyboardKeyType } from "./KeyboardKey";
import DEFAULT_PROPS from "./Keyboard.defaults";

const getKeyboardKeys = (props, viewerWidth) => {
	const { keyLow, keyHigh, podContext } = props;
	let keys = [];
	// Safe approximation for scale
	let numWhiteKeys = (keyHigh - keyLow + 1) * (7 / 12) + 1;

	for (let i = keyLow; i <= keyHigh; i++) {
		keys.push(
			<KeyboardKey
				key={i}
				noteIndex={i}
				podContext={podContext}
				scale={viewerWidth / numWhiteKeys}
			/>
		);
	}
	return keys;
}

const Keyboard = (userProps) => {

	const props = { ...DEFAULT_PROPS, ...userProps };

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
		<div className='keyboard' id='keyboard'>
			{getKeyboardKeys(props, dims[0])}
		</div>
	);
}

export default Keyboard;
