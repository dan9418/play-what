import React from "react";
import { useRecoilValue } from "recoil";
import styled from 'styled-components';
import { usePathNavContext } from "../../../../contexts/PathNavContext";
import { fullPathState } from "../../../../state/pathState";

const StyledBreadcrumbList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	margin-top: 16px;
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

	const fullPath = useRecoilValue(fullPathState);
	const { popAt } = usePathNavContext();

	const isVisible = fullPath && fullPath.length >= 2;

	return (
		<StyledBreadcrumbList>
			{isVisible && fullPath.map((b, i) => {
				const className = i + 1 === fullPath.length ? 'active' : '';
				const onClick = () => popAt(i - 1);
				return (
					<li key={i} className={className} onClick={onClick}>{b.data.name}</li>
				);
			})}
		</StyledBreadcrumbList>
	);
};

export default BreadcrumbList;
