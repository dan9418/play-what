import React from 'react';
import styled from 'styled-components';

const StyledTabList = styled.ul`
	height: 48px;
	display: flex;
	align-items: center;

	button {
		appearance: none;
		border: none;
		background: transparent;
		padding: 0 16px;
		height: 100%;
		cursor: pointer;

		&.active {
			font-weight: bold;
			background: ${({ theme }) => theme.surface.highlight};
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
					<button type="button" className={option.isActive ? 'active' : ''}>
						{option.text}
					</button>
				</li>
			))}
		</StyledTabList >
	);
};

export default TabList;
