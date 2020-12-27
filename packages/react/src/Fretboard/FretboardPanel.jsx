
import { COLOR_SCHEME_VALUES } from '@pw/core/src/Color.constants';
import { LABEL_SCHEME_VALUES } from '@pw/core/src/Label.constants';
import * as React from "react";
import useOutputContext from '../../../sandbox/src/contexts/OutputContext';
import DropdownInput from "../ui/DropdownInput/DropdownInput";
import NumericInput from "../ui/NumericInput/NumericInput";
import { FRETBOARD_TUNING_VALUES } from "./Fretboard.api";
import "./Fretboard.css";

export const FretboardPanel = ({ }) => {
	const { viewerProps, setViewerProp, name, id } = useOutputContext();
	const { fretRange, tuning, colorFn, labelFn } = viewerProps;
	const [fretLow, fretHigh] = fretRange;

	const tuningDef = FRETBOARD_TUNING_VALUES.find(o => o.value === tuning);
	const colorSchemeDef = COLOR_SCHEME_VALUES.find(o => o.value === colorFn);
	const labelSchemeDef = LABEL_SCHEME_VALUES.find(o => o.value === labelFn);

	return (
		<>
			<div className='input-bar'>
				<div>Fret Range</div>
				<div>
					<NumericInput value={fretLow} setValue={v => setViewerProp('fretRange', [v, fretHigh])} />
					<span>-</span>
					<NumericInput value={fretHigh} setValue={v => setViewerProp('fretRange', [fretLow, v])} />
				</div>
			</div>
			<div className='input-bar'>
				<div>Tuning</div>
				<DropdownInput options={FRETBOARD_TUNING_VALUES} value={tuningDef} setValue={v => setViewerProp('tuning', v.value)} />
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

export default FretboardPanel;
