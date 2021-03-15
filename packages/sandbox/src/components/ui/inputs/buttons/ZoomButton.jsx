import { MODEL_ID } from '@pw/core/src/models/Model.constants';
import React from 'react';
import { usePathNavContext } from '../../../../contexts/PathNavContext';
import THEME from '../../../../styles/theme';
import IconButton from './IconButton';

const ZoomButton = ({ metaChild }) => {
	const { push } = usePathNavContext();

	if(!metaChild || metaChild.modelId === MODEL_ID.Note || metaChild.modelId === MODEL_ID.Interval) {
		return null;
	}

	const onClick = () => push(metaChild);

	return (
		<IconButton onClick={onClick} color={THEME.primary} iconId='zoom' />
	);
}

export default ZoomButton;
