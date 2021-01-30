import React from 'react';
import styled from 'styled-components';

const StyledSVG = styled.svg`
	${({ $color }) => {
		return `
				fill: ${$color || 'white'};
				& * {
					fill: ${$color || 'white'}
				}
			`;
	}}
	${({ $hoverColor, theme }) => {
		if ($hoverColor) {
			return `
				&:hover {
					fill: ${$hoverColor || theme.accent};
					& * {
						fill: ${$hoverColor || theme.accent}
					}
				}
			`;
		}
	}}
	${({ $size }) => `
		height: ${$size || 16}px;
		width: ${$size || 16}px;
	`}
`;

export const Delete = props => (
	<StyledSVG
		xmlns="http://www.w3.org/2000/svg"
		x="0"
		y="0"
		enableBackground="new 0 0 512.001 512.001"
		version="1.1"
		viewBox="0 0 512.001 512.001"
		xmlSpace="preserve"
		{...props}
	>
		<path d="M294.111 256.001L504.109 46.003c10.523-10.524 10.523-27.586 0-38.109-10.524-10.524-27.587-10.524-38.11 0L256 217.892 46.002 7.894C35.478-2.63 18.416-2.63 7.893 7.894s-10.524 27.586 0 38.109l209.998 209.998L7.893 465.999c-10.524 10.524-10.524 27.586 0 38.109 10.524 10.524 27.586 10.523 38.109 0L256 294.11l209.997 209.998c10.524 10.524 27.587 10.523 38.11 0 10.523-10.524 10.523-27.586 0-38.109L294.111 256.001z"></path>
	</StyledSVG>
);

export const Up = props => (
	<StyledSVG
		xmlns="http://www.w3.org/2000/svg"
		x="0"
		y="0"
		enableBackground="new 0 0 213.333 213.333"
		version="1.1"
		viewBox="0 0 213.333 213.333"
		xmlSpace="preserve"
		{...props}
	>
		<path d="M106.667 53.333L0 160 213.333 160z"></path>
	</StyledSVG>
);

export const Down = props => (
	<StyledSVG
		xmlns="http://www.w3.org/2000/svg"
		x="0"
		y="0"
		enableBackground="new 0 0 213.333 213.333"
		version="1.1"
		viewBox="0 0 213.333 213.333"
		xmlSpace="preserve"
		{...props}
	>
		<path d="M0 53.333L106.667 160 213.333 53.333z"></path>
	</StyledSVG>
);

export const Plus = props => (
	<StyledSVG
		xmlns="http://www.w3.org/2000/svg"
		width="448pt"
		height="448pt"
		viewBox="0 0 448 448"
		{...props}
	>
		<path d="M408 184H272a8 8 0 01-8-8V40c0-22.09-17.91-40-40-40s-40 17.91-40 40v136a8 8 0 01-8 8H40c-22.09 0-40 17.91-40 40s17.91 40 40 40h136a8 8 0 018 8v136c0 22.09 17.91 40 40 40s40-17.91 40-40V272a8 8 0 018-8h136c22.09 0 40-17.91 40-40s-17.91-40-40-40zm0 0"></path>
	</StyledSVG>
);

export const Minus = props => (
	<StyledSVG
		xmlns="http://www.w3.org/2000/svg"
		width="469pt"
		height="469pt"
		viewBox="0 -192 469.333 469"
		{...props}
	>
		<path d="M437.332.168H32c-17.664 0-32 14.336-32 32V53.5c0 17.664 14.336 32 32 32h405.332c17.664 0 32-14.336 32-32V32.168c0-17.664-14.336-32-32-32zm0 0"></path>
	</StyledSVG>
);

export const Edit = props => (
	<StyledSVG
		xmlns="http://www.w3.org/2000/svg"
		x="0"
		y="0"
		enableBackground="new 0 0 512 512"
		version="1.1"
		viewBox="0 0 512 512"
		xmlSpace="preserve"
		{...props}
	>
		<path d="M51.2 353.28L0 512 158.72 460.8z"></path>
		<path
			d="M89.73 169.097H443.007V322.696H89.73z"
			transform="rotate(-45.001 266.366 245.9)"
		></path>
		<path d="M504.32 79.36L432.64 7.68c-10.24-10.24-25.6-10.24-35.84 0l-23.04 23.04 107.52 107.52 23.04-23.04c10.24-10.24 10.24-25.6 0-35.84z"></path>
	</StyledSVG>
);

export const Confirm = props => (
	<StyledSVG
		xmlns="http://www.w3.org/2000/svg"
		x="0"
		y="0"
		enableBackground="new 0 0 512 512"
		version="1.1"
		viewBox="0 0 512 512"
		xmlSpace="preserve"
		{...props}
	>
		<path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z"></path>
	</StyledSVG>
);

export const Cancel = props => (
	<StyledSVG
		xmlns="http://www.w3.org/2000/svg"
		x="0"
		y="0"
		enableBackground="new 0 0 477.867 477.867"
		version="1.1"
		viewBox="0 0 477.867 477.867"
		xmlSpace="preserve"
		{...props}
	>
		<path d="M238.933 0C106.974 0 0 106.974 0 238.933s106.974 238.933 238.933 238.933 238.933-106.974 238.933-238.933C477.726 107.033 370.834.141 238.933 0zM106.224 82.738a204.594 204.594 0 01132.709-48.604 203.84 203.84 0 01132.113 48.555L82.62 371.115C9.505 284.963 20.073 155.853 106.224 82.738zm265.419 312.391a204.594 204.594 0 01-132.709 48.604 203.84 203.84 0 01-132.113-48.555l288.427-288.427c73.114 86.152 62.546 215.263-23.605 288.378z"></path>
	</StyledSVG>
);

export const Menu = props => (
	<StyledSVG
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 -53 384 384"
		{...props}
	>
		<path d="M368 154.668H16c-8.832 0-16-7.168-16-16s7.168-16 16-16h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0M368 32H16C7.168 32 0 24.832 0 16S7.168 0 16 0h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0M368 277.332H16c-8.832 0-16-7.168-16-16s7.168-16 16-16h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0" />
	</StyledSVG>
);

export const GitHub = props => (
	<StyledSVG
		xmlns="http://www.w3.org/2000/svg"
		width="512"
		height="512"
		viewBox="0 0 24 24"
		{...props}
	>
		<path
			fill="#212121"
			d="M12 .5C5.37.5 0 5.78 0 12.292c0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56C20.565 21.917 24 17.495 24 12.292 24 5.78 18.627.5 12 .5z"
		/>
	</StyledSVG>
);

const ICON = {
	delete: Delete,
	up: Up,
	down: Down,
	plus: Plus,
	minus: Minus,
	edit: Edit,
	confirm: Confirm,
	cancel: Cancel,
	menu: Menu,
	github: GitHub
}

const Icon = ({ iconId, color, hoverColor, size, ...props }) => {
	const IconComponent = ICON[iconId];
	return <IconComponent $color={color} $hoverColor={hoverColor} $size={size} {...props} />;
}

export default Icon;
