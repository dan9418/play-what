import * as React from "react";
import useEditContext from "../../other/EditContext";
import usePodContext from "../../other/PodContext";
import DropdownInput from "../../ui/DropdownInput/DropdownInput";
import NumericInput from "../../ui/NumericInput/NumericInput";
import { FRETBOARD_TUNING_VALUES } from "./Fretboard.api";
import "./Fretboard.css";

export const FretboardPanel = ({ }) => {
	const { viewer, setViewer, viewerProps, setViewerProps } = usePodContext();
	const { isEditing } = useEditContext();
	const { fretRange, tuning, podContext } = viewerProps;
	const [fretLow, fretHigh] = fretRange;

	const tuningDef = FRETBOARD_TUNING_VALUES.find(o => o.value === tuning);

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
		</>
	);
}

export default FretboardPanel;
