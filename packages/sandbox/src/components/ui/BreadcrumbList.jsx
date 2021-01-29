import React from "react";
import styled from 'styled-components';
import useRouteContext from "../../contexts/RouteContext";

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

const BreadcrumbList = ({ podType, actions = [] }) => {
	const { breadcrumbs, currentPage, popAt } = useRouteContext();

	return (
		<StyledBreadcrumbList>
			{breadcrumbs.map((b, i) => {
				const className = b.id === currentPage.id ? 'active' : '';
				const onClick = () => popAt(i);
				return (
					<li key={b.id} className={className} onClick={onClick}>{b.name}</li>
				);
			})}
		</StyledBreadcrumbList>
	);
};

export default BreadcrumbList;
