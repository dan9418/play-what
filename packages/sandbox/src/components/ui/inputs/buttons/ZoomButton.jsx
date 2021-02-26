import React from 'react';
import { usePathContext } from '../../../../contexts/PathContext';
import THEME from '../../../../styles/theme';
import IconButton from './IconButton';

const ZoomButton = ({ modelId, modelData, name, pathId, ...props }) => {
	const { push } = usePathContext();

	const pathEntry = {
		name,
		pathId,
		modelId,
		modelData
	};

	const onClick = () => push(pathEntry);

	return (
		<IconButton onClick={onClick} color={THEME.primary} iconId='zoom' />
	);
}

export default ZoomButton;
