import React from "react";
import styled from 'styled-components';
import { useModelContext } from "../../contexts/ModelContext";

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

	const { path, popAt } = useModelContext();

	return (
		<StyledBreadcrumbList>
			{path.map((b, i) => {
				const className = i + 1 === path.length ? 'active' : '';
				const onClick = () => popAt(i);
				return (
					<li key={i} className={className} onClick={onClick}>{b.name}</li>
				);
			})}
		</StyledBreadcrumbList>
	);
};

export default BreadcrumbList;
