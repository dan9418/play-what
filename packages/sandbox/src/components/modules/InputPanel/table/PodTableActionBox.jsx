import CloseButton from "@pw/react/src/ui/ButtonInput/CloseButton";
import TextButton from "@pw/react/src/ui/ButtonInput/TextButton";
import React, { useState } from "react";
import styled from 'styled-components';

const INPUT_ACTIONS = [
	{
		id: 'preset',
		text: 'Import Preset',
		component: <React.Fragment />
	},
	{
		id: 'transform',
		text: 'Transform',
		component: <React.Fragment />
	}
];

const StyledPodTableActionBox = styled.div`
	width: 100%;
	background-color: #eee;
	padding: 8px;
	border-radius: 8px;
	margin-bottom: 8px;

	& .top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 8px;
		border-bottom: 1px solid #ccc;
	}
`;

const StyledActionsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const PodTableActionBox = ({ podType }) => {
	const [action, setAction] = useState(null);

	return (
		<StyledPodTableActionBox>
			{action && <>
				<div className="top">
					<h4>{action.text}</h4>
					<CloseButton onClick={() => setAction(null)} />
				</div>
				{action.component}
			</>
			}
			{!action &&
				<StyledActionsContainer>
					{INPUT_ACTIONS.map(a =>
						<TextButton key={a.id} onClick={() => setAction(a)}>{a.text}</TextButton>
					)}
				</StyledActionsContainer>
			}
		</StyledPodTableActionBox>
	);
};

export default PodTableActionBox;
