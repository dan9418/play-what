import React, { useState, useEffect } from "react";
import DEFAULT_PROPS, { IKeyboardProps } from "./Keyboard.defaults";
import StyledKeyboard from "./Keyboard.styles";
import KeyboardKey from "./KeyboardKey";

const getKeyboardKeys = (props: IKeyboardProps, viewerWidth: number) => {
	const { keyRange } = props;
	const [lo, hi] = keyRange;
	const keys = [];
	// Safe approximation for scale
	const numWhiteKeys = (hi - lo + 1) * (7 / 12) + 1;

	for (let i = lo; i <= hi; i++) {
		keys.push(
			<KeyboardKey
				key={i}
				noteIndex={i}
				scale={viewerWidth / numWhiteKeys}
				{...props}
			/>
		);
	}
	return keys;
}

const Keyboard: React.FC<IKeyboardProps> = (userProps) => {

	const props = { ...DEFAULT_PROPS, ...userProps };

	const [dims, setDims] = useState([512, 512]);

	useEffect(() => {
		const resetDimensions = (e) => {
			const el = document.getElementById('keyboard');
			setDims([el.clientWidth, el.clientHeight])
		}
		resetDimensions(null);
		window.addEventListener('resize', resetDimensions);
		return () => window.removeEventListener('resize', resetDimensions);
	}, [])

	return (
		<StyledKeyboard className='keyboard' id='keyboard'>
			{getKeyboardKeys(props, dims[0])}
		</StyledKeyboard>
	);
}

export default Keyboard;
