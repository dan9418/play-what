
import { COLOR_SCHEME_VALUES } from '@pw/core/src/Color.constants';
import { LABEL_SCHEME_VALUES } from '@pw/core/src/Label.constants';
import * as React from "react";
import useEditContext from "../../other/EditContext";
import DropdownInput from "../../ui/DropdownInput/DropdownInput";
import NumericInput from "../../ui/NumericInput/NumericInput";
import "./Keyboard.css";

export const KeyboardPanel = ({ }) => {
	const { viewer, setViewer, viewerProps, setViewerProps } = {};
	const { isEditing } = useEditContext();
	const { keyRange, colorFn, labelFn } = viewerProps;
	const [keyLow, keyHigh] = keyRange;

	const colorSchemeDef = COLOR_SCHEME_VALUES.find(o => o.value === colorFn);
	const labelSchemeDef = LABEL_SCHEME_VALUES.find(o => o.value === labelFn);

	const setProp = (k, v) => setViewerProps({ ...viewerProps, [k]: v });

	return (
		<>
			<div className='input-bar'>
				<div>Key Range</div>
				{isEditing ?
					<>
						<NumericInput value={keyLow} setValue={v => setProp('keyRange', [v, keyHigh])} />
						<span>-</span>
						<NumericInput value={keyHigh} setValue={v => setProp('keyRange', [keyLow, v])} />
					</>
					: `${keyLow}-${keyHigh}`}
			</div>
			<div className='input-bar'>
				<div>Color Scheme</div>
				{isEditing ?
					<DropdownInput options={COLOR_SCHEME_VALUES} value={colorSchemeDef} setValue={v => setProp('colorFn', v.value)} />
					: colorSchemeDef.name}
			</div>
			<div className='input-bar'>
				<div>Label Scheme</div>
				{isEditing ?
					<DropdownInput options={LABEL_SCHEME_VALUES} value={labelSchemeDef} setValue={v => setProp('labelFn', v.value)} />
					: labelSchemeDef.name}
			</div>
		</>
	);
}

export default KeyboardPanel;
