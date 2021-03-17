import React from 'react';
import styled from 'styled-components';
import Subpanel from '../ui/layout/Subpanel';

const StyledActionList = styled.ul`
	& > li {
		margin-bottom: 16px;

		& > section > *:not(:first-child) {
			margin: 8px;
		}
	}
`;

const getItems = actions => {
	return actions.map((child, i) => {
		const { name, description, editPanel } = child;

		return (
			<li key={name + i}>
				<Subpanel
					metaChild={null}
					caption={null}
					name={name}
					preview={description}
				>
					{editPanel}
				</Subpanel>
			</li>
		);
	})
};


const ActionList = ({ actions }) => {
	return (
		<StyledActionList>
			{getItems(actions)}
		</StyledActionList>
	);
};

export default ActionList;
