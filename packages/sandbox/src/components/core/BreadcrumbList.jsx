import React from "react";
import { useRecoilValue } from "recoil";
import styled from 'styled-components';
import { usePathNavContext } from "../../contexts/PathNavContext";
import { pathState } from "../../state/pathState";

const StyledBreadcrumbList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	margin-top: 16px;
	padding: 8px 0 16px;
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

	const path = useRecoilValue(pathState);
	const { popAt } = usePathNavContext();

	const isVisible = path && path.length >= 2;

	return (
		<StyledBreadcrumbList>
			{isVisible && path.map((b, i) => {
				const className = i + 1 === path.length ? 'active' : '';
				const onClick = () => popAt(i);
				return (
					<li key={i} className={className} onClick={onClick}>{/*b.name*/b}</li>
				);
			})}
		</StyledBreadcrumbList>
	);
};

export default BreadcrumbList;
