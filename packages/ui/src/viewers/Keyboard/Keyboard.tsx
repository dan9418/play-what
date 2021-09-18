import React, { useEffect, useState } from "react";
import NumberUtils from "../../../../core/src/general/Number.utils";
import DEFAULT_PROPS, { BLACK_KEY_INDICES, IKeyboardProps, KeyType } from "./Keyboard.defaults";
import StyledKeyboard from "./Keyboard.styles";
import KeyboardKey from "./KeyboardKey";

const getKeyboardKeys = (props: IKeyboardProps, viewerWidth: number) => {
	const { keyRange } = props;
	const [lo, hi] = keyRange;
	const keys = [];

	let numBlackKeys = 0;
	let numWhiteKeys = 0;
	for (let i = lo; i <= hi; i++) {
		const keyType = BLACK_KEY_INDICES.includes(NumberUtils.modulo(i, 12)) ? KeyType.White : KeyType.Black;
		if (keyType === KeyType.Black) { numBlackKeys++ } else { numWhiteKeys++; }
	}

	for (let i = lo; i <= hi; i++) {
		const keyType = BLACK_KEY_INDICES.includes(NumberUtils.modulo(i, 12)) ? KeyType.White : KeyType.Black;

		keys.push(
			<KeyboardKey
				keyType={keyType}
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
