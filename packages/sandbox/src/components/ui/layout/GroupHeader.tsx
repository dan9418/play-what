import { ModelId } from '@pw/core/src/models/Model.constants';
import React from "react";
import styled from 'styled-components';
import IconButton from '../inputs/buttons/IconButton';
import ZoomButton from '../inputs/buttons/ZoomButton';

const StyledGroupHeaderHeader = styled.h3`
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

const GroupHeaderHeader = ({ name, caption, preview, isOpen, setIsOpen, pathIds, hasChildren }) => {
	return (
		<StyledGroupHeaderHeader $showBorder={isOpen}>
			<span className="name">{name}</span>
			<span className="caption">{caption}</span>
			<div className="preview">{preview}</div>

			<StyledButtonContainer>
				{hasChildren && <IconButton iconId={isOpen ? 'minus' : 'plus'} onClick={() => setIsOpen(!isOpen)} />}
				<ZoomButton pathIds={pathIds} />
			</StyledButtonContainer>
		</StyledGroupHeaderHeader>
	);
};


const StyledGroupHeader = styled.section`
	width: 100%;
	max-width: 512px;
	border-bottom: 1px solid #ccc;

	& > .group-body {
		padding: 8px;
		border: 1px solid #ccc;
		border-top: none;
		border-bottom: none;

		& > *:not(:last-child) {
			margin-bottom: 8px;
		}
	}
`;

const GroupHeader = ({ children, ...props }) => {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<StyledGroupHeader>
			{/* @ts-ignore */}
			<GroupHeaderHeader {...props} isOpen={isOpen} setIsOpen={setIsOpen} hasChildren={!!children} />
			{isOpen &&
				<div className="group-body">
					{children}
				</div>
			}
		</StyledGroupHeader>
	);
};

export default GroupHeader;
