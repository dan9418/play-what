
import { COLOR_SCHEME_VALUES } from '@pw/core/src/Color.constants';
import { LABEL_SCHEME_VALUES } from '@pw/core/src/Label.constants';
import * as React from "react";
import useEditContext from "../../other/EditContext";
import DropdownInput from "../../ui/DropdownInput/DropdownInput";
import NumericInput from "../../ui/NumericInput/NumericInput";
import { FRETBOARD_TUNING_VALUES } from "./Fretboard.api";
import "./Fretboard.css";

export const FretboardPanel = ({ }) => {
	const { viewer, setViewer, viewerProps, setViewerProps } = {};
	const { isEditing } = useEditContext();
	const { fretRange, tuning, colorFn, labelFn } = viewerProps;
	const [fretLow, fretHigh] = fretRange;

	const tuningDef = FRETBOARD_TUNING_VALUES.find(o => o.value === tuning);
	const colorSchemeDef = COLOR_SCHEME_VALUES.find(o => o.value === colorFn);
	const labelSchemeDef = LABEL_SCHEME_VALUES.find(o => o.value === labelFn);

	const setProp = (k, v) => setViewerProps({ ...viewerProps, [k]: v });

	return (
		<>
			<div className='input-bar'>
				<div>Fret Range</div>
				{isEditing ?
					<>
						<NumericInput value={fretLow} setValue={v => setProp('fretRange', [v, fretHigh])} />
						<span>-</span>
						<NumericInput value={fretHigh} setValue={v => setProp('fretRange', [fretLow, v])} />
					</>
					: `${fretLow}-${fretHigh}`}
			</div>
			<div className='input-bar'>
				<div>Tuning</div>
				{isEditing ?
					<DropdownInput options={FRETBOARD_TUNING_VALUES} value={tuningDef} setValue={v => setProp('tuning', v.value)} />
					: viewer.name}
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

export default FretboardPanel;
