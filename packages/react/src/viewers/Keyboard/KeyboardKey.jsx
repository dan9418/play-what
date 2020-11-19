import ColorUtils from '@pw/color/src/ColorUtils';
import PodUtils from '@pw/core/src/modules/PodUtils';
import Utils from '@pw/core/src/modules/Utils';
import * as React from 'react';
import "./Keyboard.css";

const BLACK_KEY_INDICES = [0, 2, 4, 5, 7, 9, 11];

// Key dimensions relative to white key width
const KEY__DIMS = {
	WhW_WhH: 4.6875, // White key width to white key height
	WhW_BlW: 0.6250, // White key width to black key width
	WhW_BlH: 2.9688 // White key width to black hey height
}

export const KEY_TYPE = {
	Black: 'black',
	White: 'white'
}

const getScaleStyles = (keyType, scale) => {
	switch (keyType) {
	case KEY_TYPE.White:
		return {
			width: scale + 'px',
			height: KEY__DIMS.WhW_WhH * scale + 'px'
		};
	case KEY_TYPE.Black:
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

const KeyboardKey = ({ noteIndex, podContext, scale }) => {
	const { value, podType, isList } = podContext;

	const pod = PodUtils.findPodWithPitch(isList ? value : [value], noteIndex);

	const color = ColorUtils.getPodColor(pod, podType)
	const colorStyles = ColorUtils.getStylesFromBgColor(color);

	const text = PodUtils.getPreview(pod, { podType });

	let keyType = BLACK_KEY_INDICES.includes(Utils.modulo(noteIndex, 12)) ? KEY_TYPE.White : KEY_TYPE.Black;

	let scaleStyles = getScaleStyles(keyType, scale);
	let classes = ['keyboard-key', `${keyType}-key`, keyType];

	const keyStyles = keyType === KEY_TYPE.White ? scaleStyles : { ...scaleStyles, ...colorStyles };
	const labelStyles = keyType === KEY_TYPE.White ? colorStyles : {};

	return (
		<div className={`${keyType}-key-container`}>
			<div className={classes.join(' ')} style={keyStyles} onClick={() => null}>
				<div className='keyboard-key-label' style={labelStyles}>
					{text}
				</div>
			</div>
		</div>
	);
}

export default KeyboardKey;
