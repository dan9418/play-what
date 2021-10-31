import React from "react";
import { useRecoilState } from "recoil";
import styled from 'styled-components';
import { IPod } from "../../../../core/src/models/Model.constants";
import ButtonInput from "../../../../ui/src/inputs/ButtonInput";
import DEFAULT_FRETBOARD_PROPS from "../../../../ui/src/viewers/fretboard/Fretboard.defaults";
import { IPageProps } from "../../contexts/RouteContext";
import { dataListState } from "../../state/state";
import Icon from "../../../../ui/src/Icon";
import ListBuilder from "./list-builder/ListBuilder";
import PageControls from "../shared/PageTitle";
import { StyledPageBody } from "../shared/PageBody";

const StyledCreatePage = styled(StyledPageBody)`
	> .list-container {
		width: 100%;
		max-width: 1024px;
		display: flex;
		flex-direction: column;
		justify-content: center;

		> button {
			margin: 32px auto;
			width: 80%;

			display: flex;
			align-items: center;
			justify-content: center;

			svg {
				fill: white;
				margin-right: 8px;

				* {
					fill: white;
				}
			}
		}
	}
`;

const NEW_VIEWER = {
	root: [0, 0] as IPod,
	intervals: [],
	viewerProps: DEFAULT_FRETBOARD_PROPS
}

const CreatePage: React.FC<IPageProps> = () => {
	const [dataList, setDataList] = useRecoilState(dataListState);

	const insertViewer = () => setDataList([...dataList, NEW_VIEWER]);

	return (
		<StyledCreatePage>
			<PageControls title="Start From Scratch" subtitle="Start by inserting a viewer" />
			<div className="list-container">
				<ListBuilder />
				<ButtonInput onClick={insertViewer} ><Icon iconId="plus" /><span>INSERT VIEWER</span></ButtonInput>
			</div>
		</StyledCreatePage>
	);
};

export default CreatePage;
