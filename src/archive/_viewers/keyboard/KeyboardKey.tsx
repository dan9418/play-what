import React from "react";
import styled from 'styled-components';
import ColorUtils from "../../core/color/Color.utils";
import { IKeyboardKeyProps, KeyType } from './Keyboard.defaults';

// Key dimensions relative to white key width
const KEY__DIMS = {
	WhW_WhH: 4.6875, // White key width to white key height
	WhW_BlW: 0.6250, // White key width to black key width
	WhW_BlH: 2.9688 // White key width to black hey height
}

const getScaleStyles = (keyType, scale) => {
	switch (keyType) {
		case KeyType.White:
			return {
				width: scale + 'px',
				height: KEY__DIMS.WhW_WhH * scale + 'px'
			};
		case KeyType.Black:
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

const StyledKey = styled.div`
	background-color: ${({ $color }) => $color ? $color : 'transparent'};
	color: ${({ $color }) => ColorUtils.getFgColor($color)};
`;

const StyledKeyLabel = styled.div`
	color: ${({ $color }) => ColorUtils.getFgColor($color)};
`;

const KeyboardKey: React.FC<IKeyboardKeyProps> = props => {

	const { keyType, noteIndex, scale, hideLabel, model, colorMapFn } = props;

	const bgColor = colorMapFn(props);

	const scaleStyles = getScaleStyles(keyType, scale);
	const classes = ['keyboard-key', `${keyType}-key`, keyType];

	const colorStyles = {
		backgroundColor: bgColor ? bgColor : ''
	}

	const keyStyles = keyType === KeyType.White ? scaleStyles : { ...scaleStyles, ...colorStyles };
	const labelStyles = keyType === KeyType.White ? colorStyles : {};

	return (
		<StyledKey className={`${keyType}-key-container`}>
			<div className={classes.join(' ')} style={keyStyles} >
				<StyledKeyLabel className='keyboard-key-label' style={labelStyles} $color={bgColor}>
					{null}
				</StyledKeyLabel>
			</div>
		</StyledKey>
	);
}

export default KeyboardKey;
