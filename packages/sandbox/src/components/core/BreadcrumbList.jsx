import React from "react";
import styled from 'styled-components';
import { useLevelContext } from "./Level";

const StyledBreadcrumbList = styled.ul`
	display: flex;
	padding: 8px 16px;
	margin-bottom: 8px;
	list-style-type: none;
	color: #555;
	text-transform: uppercase;
	font-size: 80%;
	font-weight: bold;

	li {
		margin-right: 4px;
		cursor: pointer;
		
		&.active {
			color: ${({ theme }) => theme.accent};
		}

		:not(:last-child){
			::after {
				content: '    >'
			}
		}
	}
`;

const BreadcrumbList = () => {

	const { path, currentLevel, popAt } = useLevelContext();

	return (
		<StyledBreadcrumbList>
			{path.map((b, i) => {
				const className = b.id === currentLevel.id ? 'active' : '';
				const onClick = () => popAt(i);
				return (
					<li key={b.id} className={className} onClick={onClick}>{b.id}</li>
				);
			})}
		</StyledBreadcrumbList>
	);
};

export default BreadcrumbList;
