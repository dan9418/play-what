import { DEFAULT_PITCH_COLOR_SCHEME } from "@pw/core/src/theory/Pitch.constants";
import React from "react";
import styled from 'styled-components';
import IconButton from '../inputs/buttons/IconButton';
import ZoomButton from '../inputs/buttons/ZoomButton';
import OverflowMenu, { IAction } from "./OverflowMenu";

const StyledSubpanelHeader = styled.div`
	padding: 8px;
	white-space: nowrap;
	position: relative;
	min-height: 52px;
	border-radius: 8px;
	${({ $showBorder }) => $showBorder && 'border-bottom: 1px solid #ccc; border-radius: 8px 8px 0 0;'}

	background-color: #efefef;
	:hover {
		background-color: #f5f5f5
	}
	
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

interface ISubpanelHeaderProps {
	name: string;
	caption: string;
	preview: string;
	isOpen: boolean;
	setIsOpen: any;
	pathIds: any[];
	isLeaf: boolean;
	isEditing: boolean;
	level: number;
	actions: IAction[];
}


const SubpanelHeader: React.FC<ISubpanelHeaderProps> = ({ name, caption, preview, isOpen, setIsOpen, pathIds, isLeaf, isEditing, level, actions }) => {
	const color = DEFAULT_PITCH_COLOR_SCHEME[level * 2];

	return (
		<StyledSubpanelHeader $showBorder={isOpen} $color={color}>
			<h3 className="name">{name}</h3>
			<span className="caption">{caption}</span>
			<div className="preview">{preview}</div>

			<StyledButtonContainer>
				{isLeaf ? null :
					<>
						<IconButton iconId={isOpen ? 'minus' : 'plus'} onClick={() => setIsOpen(!isOpen)} />
						{isEditing ?
							// @ts-ignore
							<OverflowMenu items={actions} />
							:
							<ZoomButton pathIds={pathIds} />
						}
					</>
				}
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

	& .subpanel-body {
		background-color: ${({ $color }) => `${$color}11`};
		padding: 8px;
	}
`;

interface ISubpanelProps extends Omit<ISubpanelHeaderProps, 'isOpen' | 'setIsOpen'> {
	children: any;
}

const Subpanel: React.FC<ISubpanelProps> = ({ children = null, level = 0, ...props }) => {
	const [isOpen, setIsOpen] = React.useState(false);

	const color = DEFAULT_PITCH_COLOR_SCHEME[(level * 2) % 12];

	return (
		<StyledSubpanel $color={color}>
			{/* @ts-ignore */}
			<SubpanelHeader {...props} isOpen={isOpen} setIsOpen={setIsOpen} level={level} />
			{isOpen &&
				<div className="subpanel-body">
					{children}
				</div>
			}
		</StyledSubpanel>
	);
};

export default Subpanel;
