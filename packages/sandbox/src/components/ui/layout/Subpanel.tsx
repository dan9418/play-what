import { DEFAULT_PITCH_COLOR_SCHEME } from "@pw/core/src/theory/Pitch.constants";
import React from "react";
import styled from 'styled-components';
import DATA_ACTIONS from "../../pages/explorer/dataCol/actions/dataActions";
import IconButton from '../inputs/buttons/IconButton';
import ZoomButton from '../inputs/buttons/ZoomButton';
import OverflowMenu from "./OverflowMenu";

const StyledSubpanelHeader = styled.div`
	padding: 8px;
	white-space: nowrap;
	position: relative;
	min-height: 52px;
	border-radius: 8px;
	${({ $showBorder }) => $showBorder && 'border-bottom: 1px solid #ccc; border-radius: 8px 8px 0 0;'}

	background-color: ${({ $color }) => `${$color}11`};
	
	.name {
		display: inline-block;
	}

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
		font-size: 80%;
	}

	.spacer {
		width: 100%	
	}
`;

const StyledButtonContainer = styled.div`
	display: flex;
	position: absolute;
	top: 0;
	right: 0;
	button {
		margin: 6px 0;
	}
`;

const SubpanelHeader = ({ name, caption, preview, isOpen, setIsOpen, pathIds, hasChildren, isEditable, isEditing, level }) => {
	const color = DEFAULT_PITCH_COLOR_SCHEME[level * 2];

	const actions = DATA_ACTIONS;

	return (
		<StyledSubpanelHeader $showBorder={isOpen} $color={color}>
			<h3 className="name">{name}</h3>
			<span className="caption">{caption}</span>
			<div className="preview">{preview}</div>

			<StyledButtonContainer>
				<>
					<IconButton iconId={isOpen ? 'minus' : 'plus'} onClick={() => setIsOpen(!isOpen)} />
					{isEditing ?
						<OverflowMenu actions={actions} />
						:
						<ZoomButton pathIds={pathIds} />
					}
				</>
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

const Subpanel = ({ children = null, isActive = false, setIsActive = null, level = 0, isEditing = false, ...props }) => {
	const [isOpen, setIsOpen] = React.useState(isActive);

	const _isOpen = isActive || isOpen;
	const _setIsOpen = x => {
		if (setIsActive) setIsActive(x);
		else setIsOpen(x);
	};

	return (
		<StyledSubpanel>
			{/* @ts-ignore */}
			<SubpanelHeader {...props} isOpen={_isOpen} isEditing={isEditing} setIsOpen={_setIsOpen} hasChildren={!!children} level={level} />
			{_isOpen &&
				<div className="subpanel-body">
					{children}
				</div>
			}
		</StyledSubpanel>
	);
};

export default Subpanel;
