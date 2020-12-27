import ButtonInput from "@pw/react/src/ui/ButtonInput/ButtonInput";
import DropdownInput from "@pw/react/src/ui/DropdownInput/DropdownInput";
import React from "react";
import useInputContext from "../../../../contexts/InputContext";

const TRANSFORMS = [
	{
		id: 'transpose',
		name: 'Transpose',
		panelComponent: null // interval OR note???
	},
	{
		id: 'melodicInversion',
		name: 'Melodic Inversion',
		panelComponent: null // no inputs
	},
	{
		id: 'chordInversion',
		name: 'Chord Inversion',
		panelComponent: null // inversion number, check validity
	},
	{
		id: 'romanNumeral',
		name: 'Roman Numeral',
		panelComponent: null // numeral number, check validity (maybe quality)
	},
	{
		id: 'mode',
		name: 'Mode',
		panelComponent: null // degree number, check validity
	},
	{
		id: 'cadence',
		name: 'Cadence',
		panelComponent: null // type, check validity
	}
];

const InputTransformBox = () => {
	const { podType,
		setPodType,
		keyCenter,
		setKeyCenter,
		intervals,
		setIntervals,
		notes,
		setNotes } = useInputContext();

	return (
		<>
			<div className='input-bar'>
				<div>Transform</div>
				<DropdownInput options={TRANSFORMS} value={null} setValue={null} />
			</div>
			<div className='input-bar'>
				<div />
				<ButtonInput onClick={null}>Apply</ButtonInput>
			</div>
		</>
	);
};

export default InputTransformBox;
