import React from 'react';
import styled, { useTheme } from 'styled-components';
import Icon from '../../../../sandbox/src/components/ui/Icon';

const StyledZoomButton = styled.button`
	appearance: none;
	outline: none;
	border: none;
	cursor: pointer;
	background-color: transparent;
`;

const ZoomButton = ({ level, name, pathId, size, ...props }) => {
	const theme = useTheme();
	const { push } = {};
	const onClick = () => push({
		level,
		name,
		pathId
	})
	return (
		<StyledZoomButton {...props} onClick={onClick}>
			<Icon color={theme.primary} iconId='zoom' size={size} />
		</StyledZoomButton >
	);
}

export default ZoomButton;
