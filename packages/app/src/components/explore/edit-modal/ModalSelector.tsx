
import ButtonInput from "@pw/ui/src/inputs/ButtonInput";
import React from "react";
import styled from "styled-components";
import THEME from "../../../styles/theme";

const StyledModalSelector = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	padding: 8px;
	gap: 8px;

	button {
		font-weight: bold;
		font-size: 120%;
		color: ${THEME.primary};
		background-color: transparent;
		width: 100%;

		&:hover {
			background-color: ${THEME.clickable};
			color: white;
		}
	}

	button.active {
		color: white;
		background-color: ${THEME.active};

		&:hover {
			background-color: ${THEME.clickable};
		}
	}
`;

export enum TabId {
	Root = 1,
	Intervals = 2,
	Viewer = 3
}

export const ModalSelector: React.FC<any> = ({ tabId, setTabId }) => {

	return (
		<StyledModalSelector>
			<ButtonInput
				onClick={() => setTabId(TabId.Root)}
				className={tabId === TabId.Root ? "active" : ''}
			>
				Root
			</ButtonInput>
			<ButtonInput
				onClick={() => setTabId(TabId.Intervals)}
				className={tabId === TabId.Intervals ? "active" : ''}
			>
				Intervals
			</ButtonInput>
			<ButtonInput
				onClick={() => setTabId(TabId.Viewer)}
				className={tabId === TabId.Viewer ? "active" : ''}
			>
				Viewer
			</ButtonInput>
		</StyledModalSelector>
	);
};
