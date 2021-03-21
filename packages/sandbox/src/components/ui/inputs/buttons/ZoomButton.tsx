import { MODEL_ID } from '@pw/core/src/models/Model.constants';
import React from "react";
import { usePathNavContext } from '../../../../contexts/PathNavContext';
import THEME from '../../../../styles/theme';
import IconButton from './IconButton';

const ZoomButton = ({ pathId }) => {
	const { push } = usePathNavContext();

	const onClick = () => push(pathId);

	return (
		<IconButton onClick={onClick} color={THEME.primary} iconId='zoom' />
	);
}

export default ZoomButton;
