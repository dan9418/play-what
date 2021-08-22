import ColorUtils from '@pw/core/src/color/Color.utils';
import NumberUtils from '@pw/core/src/general/Number.utils';
import { IPod } from '@pw/core/src/models/Model.constants';
import ModelUtils from "@pw/core/src/models/Model.utils";
import React from "react";
import styled from 'styled-components';
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

const StyledKey = styled.div`
	background-color: ${({ $color }) => $color ? $color : 'transparent'};
	color: ${({ $color }) => ColorUtils.getFgColor($color)};
	${({ $isDimmed }) => $isDimmed ? 'opacity: 0.4;' : ''};
`;

const StyledKeyLabel = styled.div`
	color: ${({ $color }) => ColorUtils.getFgColor($color)};
`;
interface IKeyLabelProps {
	noteIndex: number;
	root: IPod;
	intervals: IPod[];
	notes: IPod[];
	scale: number;
	range: number[];
	matchOctave: boolean;
	hoveredIndex: number | null;
	setHoveredIndex: any;
}

const KeyboardKey: React.FC<IKeyLabelProps> = ({ noteIndex, scale, root, intervals, notes, hoveredIndex, setHoveredIndex }) => {

	const podProps = ModelUtils.getPodProps(notes, noteIndex);

	const { color, fgColor, label } = podProps || { color: null, fgColor: null, label: null };

	const keyType = BLACK_KEY_INDICES.includes(NumberUtils.modulo(noteIndex, 12)) ? KEY_TYPE.White : KEY_TYPE.Black;

	const scaleStyles = getScaleStyles(keyType, scale);
	const classes = ['keyboard-key', `${keyType}-key`, keyType];

	const colorStyles = {
		backgroundColor: color
	}

	const keyStyles = keyType === KEY_TYPE.White ? scaleStyles : { ...scaleStyles, ...colorStyles };
	const labelStyles = keyType === KEY_TYPE.White ? colorStyles : {};

	const onMouseEnter = () => setHoveredIndex(noteIndex)
	const onMouseLeave = () => setHoveredIndex(null);

	return (
		<StyledKey className={`${keyType}-key-container`} $isDimmed={keyType === KEY_TYPE.White && hoveredIndex !== null && hoveredIndex !== noteIndex}>
			<div className={classes.join(' ')} style={keyStyles} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
				<StyledKeyLabel className='keyboard-key-label' style={labelStyles} $color={color}>
					{label}
				</StyledKeyLabel>
			</div>
		</StyledKey>
	);
}

export default KeyboardKey;
