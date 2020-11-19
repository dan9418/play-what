import { COLOR_SCHEME_VALUES } from "@pw/color/src/ColorConstants";
import * as React from "react";
import useEditContext from "../../other/EditContext";
import usePodContext from "../../other/PodContext";
import DropdownInput from "../../ui/DropdownInput/DropdownInput";
import NumericInput from "../../ui/NumericInput/NumericInput";
import "./Keyboard.css";

export const KeyboardPanel = ({ }) => {
	const { viewer, setViewer, viewerProps, setViewerProps } = usePodContext();
	const { isEditing } = useEditContext();
	const { keyRange, colorScheme, podContext } = viewerProps;
	const [keyLow, keyHigh] = keyRange;

	const colorSchemeDef = COLOR_SCHEME_VALUES.find(o => o.value === colorScheme);

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
					<DropdownInput options={COLOR_SCHEME_VALUES} value={colorSchemeDef} setValue={v => setProp('colorScheme', v.value)} />
					: colorSchemeDef.name}
			</div>
		</>
	);
}

export default KeyboardPanel;
