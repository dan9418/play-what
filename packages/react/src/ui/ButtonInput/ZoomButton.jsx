import React from 'react';
import styled, { useTheme } from 'styled-components';
import { useLevelContext } from '../../../../sandbox/src/components/core/Level';
import Icon from '../../../../sandbox/src/components/ui/Icon';

const StyledZoomButton = styled.button`
	appearance: none;
	outline: none;
	border: none;
	cursor: pointer;
	background-color: transparent;
`;

const ZoomButton = ({ levelId, name, pathId, size, ...props }) => {
	const theme = useTheme();
	const { push } = useLevelContext();
	const onClick = () => push({
		levelId,
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
