import React from 'react';
import styled from 'styled-components';

export const StyledTabList = styled.ul`
	height: 48px;
	display: flex;
	align-items: center;

	overflow: hidden;

	button {
		appearance: none;
		border: none;
		background: transparent;
		padding: 0 16px;
		height: 100%;
		min-width: 48px;
		cursor: pointer;

		&.active {
			font-weight: bold;
			background: ${({ theme }) => theme.surface.nav}11;
			border-bottom: 2px solid ${({ theme }) => theme.active};
		}

		&:hover {
			background: ${({ theme }) => theme.clickable};
			color: white;
		}

	}
`;

const TabList: React.FC<any> = ({ options }) => {

	return (
		<StyledTabList>
			{options.map(option => (
				<li key={option.text}>
					<button type="button" className={option.isActive ? 'active' : ''} onClick={option.onClick}>
						{option.text}
					</button>
				</li>
			))}
		</StyledTabList >
	);
};

export default TabList;
