import React from 'react';
import { usePathNavContext } from '../../../../contexts/PathNavContext';
import THEME from '../../../../styles/theme';
import IconButton from './IconButton';

const ZoomButton = ({ metaChild }) => {
	const { push } = usePathNavContext();
	const onClick = () => push(metaChild);

	return (
		<IconButton onClick={onClick} color={THEME.primary} iconId='zoom' />
	);
}

export default ZoomButton;
