import { IPod } from "@pw/core/src/models/Model.constants";
import { DEFAULT_DEGREE_COLOR_SCHEME } from "@pw/core/src/theory/Degree.constants";
import { DEFAULT_PITCH_COLOR_SCHEME } from "@pw/core/src/theory/Pitch.constants";
import { hoveredIndexState } from "@pw/sandbox/src/state/dataState";
import React from "react";
import { useRecoilState } from "recoil";
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
	right: 6px;
	button {
		margin: 6px 2px;
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
	isHovered: boolean;
	level: number;
	actions: IAction[];
}


const SubpanelHeader: React.FC<ISubpanelHeaderProps> = ({ name, caption, preview, isOpen, setIsOpen, pathIds, isLeaf, isEditing, level, actions, ...rest }) => {
	const color = DEFAULT_PITCH_COLOR_SCHEME[level * 2];

	return (
		<StyledSubpanelHeader $showBorder={isOpen} $color={color} {...rest}>
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
	border-radius: 8px;
	cursor: pointer;

	box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);

	${({ $podColor }) => `border: 1px solid ${$podColor !== null ? $podColor : '#ccc'};`};
	background-color: #f5f5f5;
	:hover {
		background-color: #fff
	}

	& .subpanel-body {
		background-color: ${({ $color }) => `${$color}11`};
		padding: 8px;
	}
`;

interface ISubpanelProps extends Omit<ISubpanelHeaderProps, 'isOpen' | 'setIsOpen'> {
	children: any;
	pod: IPod;
	isHovered: boolean;
}

const Subpanel: React.FC<ISubpanelProps> = ({ pod, isHovered, children = null, level = 0, ...props }) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const [hoveredIndex, setHoveredIndex] = useRecoilState(hoveredIndexState);

	const color = DEFAULT_PITCH_COLOR_SCHEME[(level * 2) % 12];
	let podColor = null;

	let onMouseEnter = null;
	let onMouseLeave = null;

	if (pod) {
		if (!isHovered) onMouseEnter = () => setHoveredIndex(pod[0]);
		if (isHovered) {
			onMouseLeave = () => setHoveredIndex(null);
			podColor = DEFAULT_DEGREE_COLOR_SCHEME[pod[1] % 7];
		}
	}

	return (
		<StyledSubpanel $color={color} $podColor={podColor} >
			{/* @ts-ignore */}
			<SubpanelHeader {...props} isOpen={isOpen} setIsOpen={setIsOpen} level={level} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
			{isOpen &&
				<div className="subpanel-body">
					{children}
				</div>
			}
		</StyledSubpanel>
	);
};

export default Subpanel;
