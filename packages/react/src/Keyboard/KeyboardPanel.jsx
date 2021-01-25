
import { COLOR_SCHEME_VALUES } from '@pw/core/src/Color.constants';
import { LABEL_SCHEME_VALUES } from '@pw/core/src/Label.constants';
import * as React from "react";
import DropdownInput from "../ui/DropdownInput/DropdownInput";
import NumericInput from "../ui/NumericInput/NumericInput";
import "./Keyboard.css";

export const KeyboardPanel = props => {
	const { viewerProps, setViewerProp, name, id } = props;
	const { keyRange, tuning, colorFn, labelFn } = viewerProps;
	const [keyLow, keyHigh] = keyRange;

	const colorSchemeDef = COLOR_SCHEME_VALUES.find(o => o.value === colorFn);
	const labelSchemeDef = LABEL_SCHEME_VALUES.find(o => o.value === labelFn);

	return (
		<>
			<div className='input-bar'>
				<div>Key Range</div>
				<div>
					<NumericInput value={keyLow} setValue={v => setViewerProp('keyRange', [v, keyHigh])} />
					<span>-</span>
					<NumericInput value={keyHigh} setValue={v => setViewerProp('keyRange', [keyLow, v])} />
				</div>
			</div>
			<div className='input-bar'>
				<div>Color Scheme</div>
				<DropdownInput options={COLOR_SCHEME_VALUES} value={colorSchemeDef} setValue={v => setViewerProp('colorFn', v.value)} />
			</div>
			<div className='input-bar'>
				<div>Label Scheme</div>
				<DropdownInput options={LABEL_SCHEME_VALUES} value={labelSchemeDef} setValue={v => setViewerProp('labelFn', v.value)} />
			</div>
		</>
	);
}

export default KeyboardPanel;
