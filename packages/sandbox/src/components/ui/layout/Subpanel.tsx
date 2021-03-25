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

const SubpanelHeader = ({ name, caption, preview, isOpen, setIsOpen, pathIds, hasChildren, isEditable }) => {
	return (
		<StyledSubpanelHeader $showBorder={isOpen}>
			<span className="name">{name}</span>
			<span className="caption">{caption}</span>
			<div className="preview">{preview}</div>

			<StyledButtonContainer>
				{isEditable && (
					<>
						{hasChildren && <IconButton iconId={isOpen ? 'cancel' : 'edit'} onClick={() => setIsOpen(!isOpen)} />}
					</>
				)}
				{!isEditable && (
					<>
						{hasChildren && <IconButton iconId={isOpen ? 'minus' : 'plus'} onClick={() => setIsOpen(!isOpen)} />}
						<ZoomButton pathIds={pathIds} />
					</>
				)}
			</StyledButtonContainer>
		</StyledSubpanelHeader>
	);
};


const StyledSubpanel = styled.section`
	width: 100%;
	border: 1px solid #ccc;
	border-radius: 8px;
	background-color: #f5f5f5;
	box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
`;

const Subpanel = ({ children, isActive, setIsActive, ...props }) => {
	let [isOpen, setIsOpen] = React.useState(false);
	isOpen = typeof isActive === 'boolean' ? isActive : isOpen;
	setIsOpen = typeof setIsActive === 'function' ? setIsActive : setIsOpen;

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
