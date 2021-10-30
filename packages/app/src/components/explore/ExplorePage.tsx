import React from "react";
import styled from 'styled-components';
import ListBuilder from "./list-builder/ListBuilder";
import TabList from "../shared/tab-list/TabList";

const StyledExplorePage = styled.div`

	position: fixed;
	top: 80px;
	bottom: 0;
	left: 0;
	right: 0;

	width: 100%;

	display: flex;
	justify-content: center;

	overflow: auto;

	> div {
		width: 100%;
		max-width: 1024px;
		//max-width: 512px;
	}
`;

const StyledTabWrapper = styled.div`
    height: 48px;
    position: fixed;
    top: 32px;
    left: 0;
    right: 0;
    z-index: 2001;
	background: ${({ theme }) => theme.surface.gradient};
	border-bottom: 1px solid ${({ theme }) => theme.border};

	> ul {
		height: 100%;
		width: 100%;
		max-width: 1024px;
		margin: auto;

		display: flex;
		align-items: center;
	}
`

const ExplorePage: React.FC<any> = () => {

	return (
		<>
			<StyledTabWrapper>
				<TabList options={[
					{
						text: 'Home'
					},
					{
						text: 'Browse'
					},
					{
						text: 'Create',
						isActive: true
					},
					{
						text: 'Docs'
					}
				]} />
			</StyledTabWrapper>
			<StyledExplorePage>
				<div>
					<ListBuilder />
				</div>
			</StyledExplorePage>
		</>
	);
};

export default ExplorePage;
