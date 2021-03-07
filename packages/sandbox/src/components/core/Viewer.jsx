import { MODEL, MODEL_ID } from '@pw/core/src/models/Model.constants';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Fretboard from '../../../../react/src/Fretboard/Fretboard';
import DropdownInput from '../ui/inputs/DropdownInput';
import ReactJson from 'react-json-view'

const VIEWER_ID = {
	Fretboard: 'fretboard',
	Keyboard: 'keyboard'
}

const VIEWER = {
	[VIEWER_ID.Fretboard]: {
		viewerId: VIEWER_ID.Fretboard,
		name: 'Fretboard',
		component: Fretboard
	}
}

const StyledViewerContainer = styled.div`
    width: 100%;
	max-width: 512px;
	margin-top: 16px;
`;

const viewer = VIEWER[VIEWER_ID.Fretboard];

const NONE = { id: 'none', name: 'None', modelId: MODEL_ID.RelativeScale, modelValue: [], modelRoot: [0, 0] };

const Viewer = ({ modelId, modelValue, modelRoot }) => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		setIndex(0);
	}, [modelId, modelValue]);

	const model = MODEL[modelId];
	const supersets = model.utils.findSupersets ? model.utils.findSupersets(modelValue, modelRoot) : [];
	const dropdownOptions = [NONE, ...supersets];
	const superset = dropdownOptions[index]

	const labelProps = { modelId, modelValue, modelRoot, superset };

	return (
		<div>
			<h2>Viewer</h2>
			<StyledViewerContainer>
				<viewer.component labelProps={labelProps} />
			</StyledViewerContainer>
			<h2>Supersets</h2>
			<DropdownInput options={dropdownOptions} value={superset} setValue={(v, i) => setIndex(i)} />'
		</div>
	);
};

export default Viewer;
