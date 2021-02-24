import React from "react";
import styled from 'styled-components';
import { usePathContext } from "../../contexts/PathContext";

const StyledBreadcrumbList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	margin-top: 16px;
	padding: 8px 0;
	list-style-type: none;
	color: #555;
	font-size: 90%;
	font-weight: bold;
	white-space: nowrap;

	li {
		margin: 2px 4px;
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

	const { path, popAt } = usePathContext();

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
