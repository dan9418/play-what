import React from 'react';
import styled from 'styled-components';

const StyledSVG = styled.svg`
	${({ $color, theme }) => {
		return `
				fill: ${$color || theme.primary};
				& * {
					fill: ${$color || theme.primary}
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

/*export const Up = props => (
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
);*/

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

export const Maximize = props => {
	return (
		<StyledSVG
			xmlns='http://www.w3.org/2000/svg'
			width='512pt'
			height='512pt'
			viewBox='0 0 512 512'
			{...props}
		>
			<path d='M145.969 423.246h-36.707l84.687-84.375-21.172-21.254-84.476 84.164v-36.203h-30v87.668h87.668zm0 0M366.031 423.246v30H453.7v-87.668h-30v36.203l-84.476-84.164-21.172 21.254 84.687 84.375zm0 0M88.3 110.219l84.477 84.164 21.172-21.254-84.687-84.375h36.707v-30H58.3v87.668h30zm0 0M339.223 194.383l84.476-84.164v36.203h30V58.754h-87.668v30h36.707l-84.687 84.375zm0 0'></path>
			<path d='M0 0v512h512V0zm482 482H30V30h452zm0 0'></path>
		</StyledSVG>
	);
}

export const ZoomArrow = props => {
	return (
		<StyledSVG
			xmlns='http://www.w3.org/2000/svg'
			x='0'
			y='0'
			enableBackground='new 0 0 492.004 492.004'
			version='1.1'
			viewBox='0 0 492.004 492.004'
			xmlSpace='preserve'
			{...props}
		>
			<path d='M484.14 226.886L306.46 49.202c-5.072-5.072-11.832-7.856-19.04-7.856-7.216 0-13.972 2.788-19.044 7.856l-16.132 16.136c-5.068 5.064-7.86 11.828-7.86 19.04 0 7.208 2.792 14.2 7.86 19.264L355.9 207.526H26.58C11.732 207.526 0 219.15 0 234.002v22.812c0 14.852 11.732 27.648 26.58 27.648h330.496L252.248 388.926c-5.068 5.072-7.86 11.652-7.86 18.864 0 7.204 2.792 13.88 7.86 18.948l16.132 16.084c5.072 5.072 11.828 7.836 19.044 7.836 7.208 0 13.968-2.8 19.04-7.872l177.68-177.68c5.084-5.088 7.88-11.88 7.86-19.1.016-7.244-2.776-14.04-7.864-19.12z'></path>
		</StyledSVG>
	);
}

export const Zoom = props => {
	return (
		<StyledSVG
			xmlns="http://www.w3.org/2000/svg"
			x="0"
			y="0"
			enableBackground="new 0 0 512.005 512.005"
			version="1.1"
			viewBox="0 0 512.005 512.005"
			xmlSpace="preserve"
			{...props}
	  >
			<path d="M505.749 475.587l-145.6-145.6c28.203-34.837 45.184-79.104 45.184-127.317C405.333 90.926 314.41.003 202.666.003S0 90.925 0 202.669s90.923 202.667 202.667 202.667c48.213 0 92.48-16.981 127.317-45.184l145.6 145.6c4.16 4.16 9.621 6.251 15.083 6.251s10.923-2.091 15.083-6.251c8.341-8.341 8.341-21.824-.001-30.165zM202.667 362.669c-88.235 0-160-71.765-160-160s71.765-160 160-160 160 71.765 160 160-71.766 160-160 160z"></path>
	  </StyledSVG>
	);
}

export const Speaker = props => {
	return (
		<StyledSVG
			xmlns='http://www.w3.org/2000/svg'
			width='93.038'
			height='93.038'
			x='0'
			y='0'
			enableBackground='new 0 0 93.038 93.038'
			version='1.1'
			viewBox='0 0 93.038 93.038'
			xmlSpace='preserve'
			{...props}
		>
			<path d='M46.547 75.521a4.221 4.221 0 01-2.429 3.823 4.222 4.222 0 01-4.493-.571l-23.098-19.14H4.225A4.223 4.223 0 010 55.409V38.576a4.226 4.226 0 014.225-4.226h12.303l23.098-19.14a4.215 4.215 0 014.493-.569 4.224 4.224 0 012.429 3.823l-.001 57.057zm16.237-6.602a4.22 4.22 0 01-3.291-1.226l-.565-.567a4.222 4.222 0 01-.408-5.504 24.381 24.381 0 004.834-14.628c0-5.706-1.896-11.058-5.484-15.478a4.222 4.222 0 01.291-5.65l.564-.565c.844-.844 1.975-1.304 3.199-1.231a4.23 4.23 0 013.061 1.545c4.977 6.09 7.606 13.484 7.606 21.38 0 7.354-2.325 14.354-6.725 20.24a4.228 4.228 0 01-3.082 1.684zm17.468 13.057a4.23 4.23 0 01-6.217.262l-.555-.555a4.226 4.226 0 01-.246-5.707 45.101 45.101 0 0010.568-28.982 44.976 44.976 0 00-11.314-29.847 4.226 4.226 0 01.17-5.783l.554-.555a4.113 4.113 0 013.115-1.242 4.225 4.225 0 013.036 1.417 54.173 54.173 0 0113.675 36.01 54.286 54.286 0 01-12.786 34.982z'></path>
		</StyledSVG>
	);
}

export const PlayPause = props => {
	return (
		<StyledSVG
			xmlns='http://www.w3.org/2000/svg'
			width='45.974'
			height='45.975'
			x='0'
			y='0'
			enableBackground='new 0 0 45.974 45.975'
			version='1.1'
			viewBox='0 0 45.974 45.975'
			xmlSpace='preserve'
			{...props}
		>
			<path d='M9.629 44.68a4.04 4.04 0 01-6.907-2.85V4.043a4.04 4.04 0 016.907-2.851l17.862 17.951a5.375 5.375 0 010 7.585L9.629 44.68zM38.252 45.975c-2.763 0-5-2.238-5-5V5c0-2.762 2.237-5 5-5a5 5 0 015 5v35.975a5 5 0 01-5 5z'></path>
		</StyledSVG>
	);
}

export const Up = props => {
	return (
		<StyledSVG
			xmlns='http://www.w3.org/2000/svg'
			x='0'
			y='0'
			enableBackground='new 0 0 240.835 240.835'
			version='1.1'
			viewBox='0 0 240.835 240.835'
			xmlSpace='preserve'
			{...props}
		>
			<path d='M129.007 57.819c-4.68-4.68-12.499-4.68-17.191 0L3.555 165.803c-4.74 4.74-4.74 12.427 0 17.155 4.74 4.74 12.439 4.74 17.179 0l99.683-99.406 99.671 99.418c4.752 4.74 12.439 4.74 17.191 0 4.74-4.74 4.74-12.427 0-17.155L129.007 57.819z'></path>
		</StyledSVG>
	);
}

export const Prev = props => {
	return (
		<StyledSVG
			xmlns='http://www.w3.org/2000/svg'
			x='0'
			y='0'
			enableBackground='new 0 0 240.823 240.823'
			version='1.1'
			viewBox='0 0 240.823 240.823'
			xmlSpace='preserve'
			{...props}
		>
			<path d='M57.633 129.007L165.93 237.268c4.752 4.74 12.451 4.74 17.215 0 4.752-4.74 4.752-12.439 0-17.179l-99.707-99.671 99.695-99.671c4.752-4.74 4.752-12.439 0-17.191-4.752-4.74-12.463-4.74-17.215 0L57.621 111.816c-4.679 4.691-4.679 12.511.012 17.191z'></path>
		</StyledSVG>
	);
}

export const Next = props => {
	return (
		<StyledSVG
			xmlns='http://www.w3.org/2000/svg'
			x='0'
			y='0'
			enableBackground='new 0 0 240.823 240.823'
			version='1.1'
			viewBox='0 0 240.823 240.823'
			xmlSpace='preserve'
			{...props}
		>
			<path d='M183.189 111.816L74.892 3.555c-4.752-4.74-12.451-4.74-17.215 0-4.752 4.74-4.752 12.439 0 17.179l99.707 99.671-99.695 99.671c-4.752 4.74-4.752 12.439 0 17.191 4.752 4.74 12.463 4.74 17.215 0l108.297-108.261c4.68-4.691 4.68-12.511-.012-17.19z'></path>
		</StyledSVG>
	);
}

const ICON = {
	// Directions
	up: Up,
	down: Down,
	prev: Prev,
	next: Next,
	// Actions
	delete: Delete,
	edit: Edit,
	confirm: Confirm,
	cancel: Cancel,
	zoom: Zoom,
	speaker: Speaker,
	playPause: PlayPause,
	// Utility
	plus: Plus,
	minus: Minus,
	menu: Menu,
	// Social
	github: GitHub
}

const Icon = ({ iconId, color, hoverColor, size, ...props }) => {
	const IconComponent = ICON[iconId];
	return <IconComponent $color={color} $hoverColor={hoverColor} $size={size} {...props} />;
}

export default Icon;
