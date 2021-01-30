import React from 'react';
import styled, { useTheme } from 'styled-components';
import Icon from '../../../../sandbox/src/components/ui/Icon';
import useRouteContext from '../../../../sandbox/src/contexts/RouteContext';

const StyledZoomButton = styled.button`
	appearance: none;
	outline: none;
	border: none;
	cursor: pointer;
	background-color: transparent;
`;

const ZoomButton = ({ level, name, index, size, ...props }) => {
	const theme = useTheme();
	const { push } = useRouteContext();
	const onClick = () => push({
		level,
		name,
		index
	})
	return (
		<StyledZoomButton {...props} onClick={onClick}>
			<Icon color={theme.primary} iconId='zoom' size={size} />
		</StyledZoomButton >
	);
}

export default ZoomButton;
