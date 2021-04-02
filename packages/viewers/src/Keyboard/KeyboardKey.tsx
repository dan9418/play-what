import NumberUtils from '@pw/core/src/general/Number.utils';
import ModelUtils from "@pw/core/src/models/Model.utils";
import "./Keyboard.css";
import React from "react";

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

const KeyboardKey = ({ noteIndex, scale, modelId, modelValue, modelOptions }) => {

	const podProps = ModelUtils.getPodProps(modelId, modelValue, modelOptions, noteIndex);

	const { color, label } = podProps || { color: null, label: null };

	const colorStyles = { backgroundColor: color };

	const keyType = BLACK_KEY_INDICES.includes(NumberUtils.modulo(noteIndex, 12)) ? KEY_TYPE.White : KEY_TYPE.Black;

	const scaleStyles = getScaleStyles(keyType, scale);
	const classes = ['keyboard-key', `${keyType}-key`, keyType];

	const keyStyles = keyType === KEY_TYPE.White ? scaleStyles : { ...scaleStyles, ...colorStyles };
	const labelStyles = keyType === KEY_TYPE.White ? colorStyles : {};

	return (
		<div className={`${keyType}-key-container`} onClick={null}>
			<div className={classes.join(' ')} style={keyStyles} onClick={null}>
				<div className='keyboard-key-label' style={labelStyles}>
					{label}
				</div>
			</div>
		</div>
	);
}

export default KeyboardKey;
