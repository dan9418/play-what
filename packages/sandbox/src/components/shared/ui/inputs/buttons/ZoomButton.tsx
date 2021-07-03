import React from "react";
import { usePathNavContext } from '../../../../../contexts/PathNavContext';
import THEME from '../../../../../styles/theme';
import IconButton from './IconButton';

interface IZoomButtonProps {
	pathIds: number[]
}

const ZoomButton: React.FC<IZoomButtonProps> = ({ pathIds }) => {
	const { push } = usePathNavContext();

	const onClick = () => push(pathIds);

	return (
		<IconButton onClick={onClick} color={THEME.primary} iconId='zoom' />
	);
}

export default ZoomButton;
