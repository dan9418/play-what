
import { COLOR_FN_INTERVAL_VALUES, COLOR_FN_NOTE_VALUES } from '@pw/core/src/Color.constants';
import { LABEL_FN_INTERVAL_VALUES, LABEL_FN_NOTE_VALUES } from '@pw/core/src/Label.constants';
import * as React from "react";
import PodTypeSwitch from '../../../sandbox/src/components/pages/Explore/PodTypeSwitch';
import useOutputContext from '../../../sandbox/src/contexts/OutputContext';
import DropdownInput from "../ui/DropdownInput/DropdownInput";
import NumericInput from "../ui/NumericInput/NumericInput";
import { FRETBOARD_TUNING_VALUES } from "./Fretboard.api";
import "./Fretboard.css";

export const FretboardPanel = ({ }) => {
	const { viewerProps, setViewerProp, name, id } = useOutputContext();
	const { fretRange, tuning, colorPodType, colorFn, labelPodType, labelFn } = viewerProps;
	const [fretLow, fretHigh] = fretRange;

	const tuningDef = FRETBOARD_TUNING_VALUES.find(o => o.value === tuning);
	const colorOptions = colorPodType === 'note' ? COLOR_FN_NOTE_VALUES : COLOR_FN_INTERVAL_VALUES;
	const colorSchemeDef = colorOptions.find(o => o.value === colorFn);
	const labelOptions = labelPodType === 'note' ? LABEL_FN_NOTE_VALUES : LABEL_FN_INTERVAL_VALUES;
	const labelSchemeDef = labelOptions.find(o => o.value === labelFn);

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
				<div>Color Pod Type</div>
				<PodTypeSwitch podType={colorPodType} setPodType={v => setViewerProp('colorPodType', v)} />
			</div>
			<div className='input-bar'>
				<div>Color Scheme</div>
				<DropdownInput options={colorOptions} value={colorSchemeDef} setValue={v => setViewerProp('colorFn', v.value)} />
			</div>
			<div className='input-bar'>
				<div>Label Pod Type</div>
				<PodTypeSwitch podType={labelPodType} setPodType={v => setViewerProp('labelPodType', v)} />
			</div>
			<div className='input-bar'>
				<div>Label Scheme</div>
				<DropdownInput options={labelOptions} value={labelSchemeDef} setValue={v => setViewerProp('labelFn', v.value)} />
			</div>
		</>
	);
}

export default FretboardPanel;
