import React from 'react';
import { usePathContext } from '../../../../contexts/PathContext';
import THEME from '../../../../styles/theme';
import IconButton from './IconButton';

const ZoomButton = ({ metaChild }) => {
	const { push } = usePathContext();
	const onClick = () => push(metaChild);

	return (
		<IconButton onClick={onClick} color={THEME.primary} iconId='zoom' />
	);
}

export default ZoomButton;
