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
	title: string;
	subtitle?: string;
	modal: any;
	children: any;
}

const Panel: React.FC<IPanelProps> = ({ title, subtitle, modal, children = null }) => {
	return (
		<StyledPanel className={`panel ${title}`}>
			<PanelHeader title={title} subtitle={subtitle} modal={modal} />
			<div className="panel-body">
				{children}
			</div>
		</StyledPanel>
	);
};

export default Panel;
