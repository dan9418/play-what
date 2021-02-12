import React from 'react';
import styled, { useTheme } from 'styled-components';
import { usePathContext } from '../../../../contexts/PathContext';
import Icon from '../../assets/Icon';

const StyledZoomButton = styled.button`
	appearance: none;
	outline: none;
	border: none;
	cursor: pointer;
	background-color: transparent;
`;

const ZoomButton = ({ modelId, name, pathId, size, ...props }) => {
	const theme = useTheme();
	const { push } = usePathContext();
	const onClick = () => push({
		name,
		pathId,
		modelId
	});
	return (
		<StyledZoomButton {...props} onClick={onClick}>
			<Icon color={theme.primary} iconId='zoom' size={size} />
		</StyledZoomButton >
	);
}

export default ZoomButton;