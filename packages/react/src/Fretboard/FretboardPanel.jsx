
import { COLOR_SOURCES } from '@pw/core/src/Color.constants';
import { LABEL_SOURCES } from '@pw/core/src/Label.constants';
import * as React from "react";
import useOutputContext from '../../../sandbox/src/contexts/OutputContext';
import DropdownInput from "../ui/DropdownInput/DropdownInput";
import NumericInput from "../ui/NumericInput/NumericInput";
import { FRETBOARD_TUNING_VALUES } from "./Fretboard.api";
import "./Fretboard.css";

export const FretboardPanel = ({ }) => {
	const { viewerProps, setViewerProp, name, id } = useOutputContext();
	const { fretRange, tuning, colorSource, colorProperty, colorScheme, labelSource, labelProperty, keyCenter, intervals, notes } = viewerProps;
	const [fretLow, fretHigh] = fretRange;

	const tuningDef = FRETBOARD_TUNING_VALUES.find(o => o.value === tuning);

	const colorSourceDef = COLOR_SOURCES.find(s => s.id === colorSource);
	const colorPropertyDef = colorSourceDef.properties.find(x => x.id === colorProperty);
	const colorSchemeDef = colorPropertyDef.schemes.find(x => x.id === colorScheme);

	const labelSourceDef = LABEL_SOURCES.find(s => s.id === labelSource);
	const labelPropertyDef = labelSourceDef.properties.find(x => x.id === labelProperty);

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
				{intervals !== null && <DropdownInput options={COLOR_SOURCES} value={colorSourceDef} setValue={v => setViewerProp('colorSource', v.id)} />}
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
				{intervals !== null && <DropdownInput options={LABEL_SOURCES} value={labelSourceDef} setValue={v => setViewerProp('labelSource', v.id)} />}
				{intervals === null && <span>Notes</span>}
			</div>
			<div className='input-bar'>
				<div>Property</div>
				<DropdownInput options={labelPropertyDef} value={labelSourceDef.properties} setValue={v => setViewerProp('labelProperty', v.value)} />
			</div>
		</>
	);
}

export default FretboardPanel;
