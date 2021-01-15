
import { COLOR_SOURCES } from '@pw/core/src/Color.constants';
import { LABEL_FN_INTERVAL_VALUES, LABEL_FN_NOTE_VALUES } from '@pw/core/src/Label.constants';
import * as React from "react";
import useOutputContext from '../../../sandbox/src/contexts/OutputContext';
import DropdownInput from "../ui/DropdownInput/DropdownInput";
import NumericInput from "../ui/NumericInput/NumericInput";
import { FRETBOARD_TUNING_VALUES } from "./Fretboard.api";
import "./Fretboard.css";

const SOURCE_OPTIONS = [
	{
		id: 'none',
		name: 'None'
	},
	{
		id: 'keyCenter',
		name: 'Key Center'
	},
	{
		id: 'intervals',
		name: 'Intervals'
	},
	{
		id: 'notes',
		name: 'Notes'
	}
];

export const FretboardPanel = ({ }) => {
	const { viewerProps, setViewerProp, name, id } = useOutputContext();
	const { fretRange, tuning, colorSource, colorProperty, colorScheme, labelSource, labelFn, keyCenter, intervals, notes } = viewerProps;
	const [fretLow, fretHigh] = fretRange;

	const tuningDef = FRETBOARD_TUNING_VALUES.find(o => o.value === tuning);
	const colorSourceDef = COLOR_SOURCES.find(s => s.id === colorSource);
	const colorPropertyDef = colorSourceDef.properties.find(x => x.id === colorProperty);
	const colorSchemeDef = colorPropertyDef.schemes.find(x => x.id === colorScheme);
	const labelSourceDef = SOURCE_OPTIONS.find(s => s.id === labelSource);
	const labelOptions = labelSource === 'intervals' ? LABEL_FN_INTERVAL_VALUES : LABEL_FN_NOTE_VALUES;
	const labelSchemeDef = labelOptions.find(o => o.value === labelFn);

	return (
		<>
			<div className='input-bar-header'>
				Strings
			</div>
			<div className='input-bar'>
				<div>Tuning</div>
				<DropdownInput options={FRETBOARD_TUNING_VALUES} value={tuningDef} setValue={v => setViewerProp('tuning', v.value)} />
			</div>
			<div className='input-bar-header'>
				Frets
			</div>
			<div className='input-bar'>
				<div>Range</div>
				<div>
					<NumericInput value={fretLow} setValue={v => setViewerProp('fretRange', [v, fretHigh])} />
					<span>{` - `}</span>
					<NumericInput value={fretHigh} setValue={v => setViewerProp('fretRange', [fretLow, v])} />
				</div>
			</div>
			<div className='input-bar-header'>
				Color
			</div>
			<div className='input-bar'>
				<div>Source</div>
				{intervals !== null && <DropdownInput options={SOURCE_OPTIONS} value={colorSourceDef} setValue={v => setViewerProp('colorSource', v.id)} />}
				{intervals === null && <span>Notes</span>}
			</div>
			<div className='input-bar'>
				<div>Property</div>
				<DropdownInput options={colorSourceDef.properties} value={colorPropertyDef} setValue={v => setViewerProp('colorProperty', v.id)} />
			</div>
			<div className='input-bar'>
				<div>Scheme</div>
				<DropdownInput options={colorPropertyDef.schemes} value={colorSchemeDef} setValue={v => setViewerProp('colorScheme', v.value)} />
			</div>
			<div className='input-bar-header'>
				Label
			</div>
			<div className='input-bar'>
				<div>Source</div>
				{intervals !== null && <DropdownInput options={SOURCE_OPTIONS} value={labelSourceDef} setValue={v => setViewerProp('labelSource', v.id)} />}
				{intervals === null && <span>Notes</span>}
			</div>
			<div className='input-bar'>
				<div>Property</div>
				<DropdownInput options={labelOptions} value={labelSchemeDef} setValue={v => setViewerProp('labelFn', v.value)} />
			</div>
		</>
	);
}

export default FretboardPanel;
