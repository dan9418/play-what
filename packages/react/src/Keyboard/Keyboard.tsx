// @ts-ignore
import React, { useState, useEffect } from "react";
import "./Keyboard.css";
import DEFAULT_PROPS from "./Keyboard.defaults";
import KeyboardKey from "./KeyboardKey";

const getKeyboardKeys = (props, viewerWidth) => {
	const { keyRange, labelProps } = props;
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
				{...labelProps}
			/>
		);
	}
	return keys;
}

const Keyboard = (userProps) => {

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
		<div className='keyboard' id='keyboard'>
			{getKeyboardKeys(props, dims[0])}
		</div>
	);
}

export default Keyboard;
