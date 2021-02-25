import React from 'react';
import { useTheme } from 'styled-components';
import { usePathContext } from '../../../../contexts/PathContext';
import IconButton from './IconButton';

const ZoomButton = ({ modelId, modelData, name, pathId, ...props }) => {
	const theme = useTheme();
	const { push } = usePathContext();

	const childData = {
		name,
		pathId,
		modelId,
		modelData
	};

	const onClick = () => push(childData);

	return (
		<IconButton onClick={onClick} color={theme.primary} iconId='zoom' />
	);
}

export default ZoomButton;
