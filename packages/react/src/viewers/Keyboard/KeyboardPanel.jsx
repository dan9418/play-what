import * as React from "react";
import useEditContext from "../../other/EditContext";
import usePodContext from "../../other/PodContext";
import DropdownInput from "../../ui/DropdownInput/DropdownInput";
import NumericInput from "../../ui/NumericInput/NumericInput";
import "./Keyboard.css";

export const KeyboardPanel = ({ }) => {
	const { viewer, setViewer, viewerProps, setViewerProps } = usePodContext();
	const { isEditing } = useEditContext();
	const { keyRange, podContext } = viewerProps;
	const [keyLow, keyHigh] = keyRange;

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
		</>
	);
}

export default KeyboardPanel;
