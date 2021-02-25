import React from 'react';
import { useTheme } from 'styled-components';
import { usePathContext } from '../../../../contexts/PathContext';
import THEME from '../../../../styles/theme';
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
		<IconButton onClick={onClick} color={THEME.active} iconId='zoom' />
	);
}

export default ZoomButton;
