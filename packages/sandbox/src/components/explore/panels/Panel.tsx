import React from "react";
import styled from 'styled-components';
import PanelHeader from "./PanelHeader";

const StyledPanel = styled.div`
	max-width: 512px;
	width: 100%;
	margin: auto;
	margin-top: 0;
	margin-bottom: 0;
	display: flex;
	flex-direction: column;

	.panel-body {
		padding: 8px 16px;
		position: sticky;
	}
`;

interface IPanelProps {
	name: string;
	preview?: string;
	modal: any;
	headerChildren: any;
	children: any;
}

const Panel: React.FC<IPanelProps> = ({ name, preview, modal, headerChildren, children }) => {
	return (
		<StyledPanel className={`panel ${name}`}>
			<PanelHeader name={name} preview={preview} modal={modal}>{headerChildren}</PanelHeader>
			<div className="panel-body">
				{children}
			</div>
		</StyledPanel>
	);
};

export default Panel;
