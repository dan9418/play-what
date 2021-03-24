import React from "react";
import styled from 'styled-components';
import IconButton from '../inputs/buttons/IconButton';
import ZoomButton from '../inputs/buttons/ZoomButton';

const StyledSubpanelHeader = styled.h3`
	padding: 8px;
	white-space: nowrap;
	position: relative;
	min-height: 52px;
	${({ $showBorder }) => $showBorder && 'border-bottom: 1px solid #ccc;'}

	.top {
		display: flex;
		align-items: center;
		width: 100%;
	}
	
	.caption {
		font-weight: normal;
		color: #555;
		font-size: 80%;
		margin-left: 8px;
	}

	.preview {
		font-weight: normal;
		color: ${({ theme }) => theme.accent};
		font-size: 70%;
	}

	.spacer {
		width: 100%	
	}
`;

const StyledButtonContainer = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	button {
		margin: 6px 2px;
	}
`;

const SubpanelHeader = ({ name, caption, preview, isOpen, setIsOpen, pathId, hasChildren }) => {
	return (
		<StyledSubpanelHeader $showBorder={isOpen}>
			<span className="name">{name}</span>
			<span className="caption">{caption}</span>
			<div className="preview">{preview}</div>

			<StyledButtonContainer>
				{hasChildren && <IconButton iconId={isOpen ? 'minus' : 'plus'} onClick={() => setIsOpen(!isOpen)} />}
				<ZoomButton pathId={pathId} />
			</StyledButtonContainer>
		</StyledSubpanelHeader>
	);
};


const StyledSubpanel = styled.section`
	width: 100%;
	max-width: 512px;
	border: 1px solid #ccc;
	border-radius: 8px;
	background-color: #f5f5f5;
	box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);

	& > .subpanel-body {
		padding: 16px 8px;
		//background-color: #eee;
		border-radius: 0 0 8px 8px;

		& > *:not(:last-child) {
			margin-bottom: 8px;
		}
	}
`;

const Subpanel = ({ children, ...props }) => {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<StyledSubpanel>
			{/* @ts-ignore */}
			<SubpanelHeader {...props} isOpen={isOpen} setIsOpen={setIsOpen} hasChildren={!!children} />
			{isOpen &&
				<div className="subpanel-body">
					{children}
				</div>
			}
		</StyledSubpanel>
	);
};

export default Subpanel;
