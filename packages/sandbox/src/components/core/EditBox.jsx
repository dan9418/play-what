import CloseButton from "@pw/react/src/ui/ButtonInput/CloseButton";
import TextButton from "@pw/react/src/ui/ButtonInput/TextButton";
import React from "react";
import styled from 'styled-components';

const StyledEditBox = styled.div`
	width: 100%;
	background-color: #eee;
	padding: 8px;
	border-radius: 8px;

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
	justify-content: space-between;

	& > div {
		width: 100%;
		&:first-child {
			text-align: left;
		}
		&:last-child {
			text-align: right;
		}
	}
`;

const EditBox = ({ leftActions = [], rightActions = [], action, setAction }) => {
	return (
		<StyledEditBox>
			{action && <div className="top">
				<h4>{action.text}</h4>
				<CloseButton onClick={() => setAction(null)} />
			</div>}
			{!action &&
				<StyledActionsContainer>
					<div>
						{leftActions.map(a =>
							<TextButton key={a.id} onClick={() => setAction(a)}>{a.text}</TextButton>
						)}
					</div>
					<div>
						{rightActions.map(a =>
							<TextButton key={a.id} onClick={() => setAction(a)}>{a.text}</TextButton>
						)}
					</div>
				</StyledActionsContainer>
			}
			{action && action.component}
		</StyledEditBox>
	);
};

export default EditBox;
