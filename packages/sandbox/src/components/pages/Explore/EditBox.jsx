import CloseButton from "@pw/react/src/ui/ButtonInput/CloseButton";
import TextButton from "@pw/react/src/ui/ButtonInput/TextButton";
import React from "react";
import styled from 'styled-components';

const StyledEditBox = styled.div`
	width: 100%;
	background-color: #eee;
	padding: 8px;
	border-radius: 8px;

	& .close {
		display: block;
		margin-left: auto;
	}
`;

const StyledLeftContainer = styled.div`
	width: 100%;
	display: flex;
`;

const EditBox = ({ leftActions, rightAction, action, setAction }) => {
	return (
		<StyledEditBox>
			{!action &&
				<StyledLeftContainer>
					{leftActions.map(a =>
						<TextButton key={a.id} onClick={() => setAction(a)}>{a.text}</TextButton>
					)}
					{rightAction || null}
				</StyledLeftContainer>
			}
			{action && <CloseButton onClick={() => setAction(null)} />}
			{action && action.component}
		</StyledEditBox>
	);
};

export default EditBox;
