import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from 'styled-components';
import { IPageProps } from "../../contexts/RouteContext";
import { dataListState } from "../../state/state";
import { DEFAULT_DATA_LIST } from "./CreatePage.defaults";
import ListBuilder from "./list-builder/ListBuilder";

const StyledCreatePage = styled.div`

	position: fixed;
	top: 80px;
	bottom: 0;
	left: 0;
	right: 0;

	width: 100%;

	display: flex;
	justify-content: center;

	overflow: auto;

	> div {
		width: 100%;
		max-width: 1024px;
		//max-width: 512px;
	}
`;

const CreatePage: React.FC<IPageProps> = () => {
	const [dataList, setDataList] = useRecoilState(dataListState);
	useEffect(() => {
		setDataList(DEFAULT_DATA_LIST);
	}, [])
	return (
		<StyledCreatePage>
			<div>
				<ListBuilder />
			</div>
		</StyledCreatePage>
	);
};

export default CreatePage;
