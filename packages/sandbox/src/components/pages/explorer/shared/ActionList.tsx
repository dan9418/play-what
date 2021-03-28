import React, { useState } from "react";
import styled from 'styled-components';
import Subpanel from '../../../ui/layout/Subpanel';

const StyledActionList = styled.ul`
	& > li {
		margin-bottom: 16px;
	}
`;

const getItems = (actions, activeIndex, setActiveIndex) => {
	return actions.map((child, i) => {
		const { name, description, editPanel } = child;
		return (
			<li key={name + i}>
				<Subpanel
					metaChild={null}
					caption={null}
					name={name}
					preview={description}
					isEditable={true}
					isActive={activeIndex === i}
					setIsActive={() => setActiveIndex(activeIndex === i ? null : i)}
				>
					{editPanel}
				</Subpanel>
			</li>
		);
	})
};


const ActionList = ({ actions }) => {
	const [activeIndex, setActiveIndex] = useState(null);
	return (
		<StyledActionList>
			{getItems(actions, activeIndex, setActiveIndex)}
		</StyledActionList>
	);
};

export default ActionList;
