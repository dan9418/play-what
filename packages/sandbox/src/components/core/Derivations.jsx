import { MODEL, MODEL_ID } from '@pw/core/src/models/helpers/Model.constants';
import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { usePathNavContext } from '../../contexts/PathNavContext';
import { pathHeadState } from '../../state/pathState';
import IconButton from '../ui/inputs/buttons/IconButton';

const StyledDerivations = styled.div`
	padding: 16px;
	background-color: #ddd;
	border-radius: 12px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Derivations = () => {
	const { modelId, modelArgs } = useRecoilValue(pathHeadState);
	const model = MODEL[modelId];

	const { push } = usePathNavContext();

	if (!model.isRelative) return null;

	const addRoot = () => {
		push({
			modelId: MODEL_ID.Chord,
			childId: 0,
			name: 'Derived Chord',
			modelArgs
		});
	};

	return (
		<StyledDerivations>
			Add Root
			<IconButton iconId="plus" onClick={addRoot} />
		</StyledDerivations>
	);
};

export default Derivations;
