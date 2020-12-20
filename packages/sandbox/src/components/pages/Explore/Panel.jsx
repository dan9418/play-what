import React, { useState } from "react";
import styled from 'styled-components';
import useEditContext, { EditContextProvider } from "../../../contexts/EditContext";
import Subpanel, { NewSubpanelButton } from "./Subpanel";
import { ButtonInput } from '@pw/react';
import InputSubpanelContent from "./input/InputSubpanelContent";
import ViewerBox from "./output/ViewerBox";

const StyledPanel = styled.div`
	width: 100%;
	max-width: 512px;
	margin: 0 16px;
	& .header {
		padding: 0 16px 16px 16px;
		margin-bottom: 16px;
		border-bottom: 1px solid #ccc;
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
	}
	& .body {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		flex-wrap: wrap;
	}
`;

export const PanelHeader = ({ isOpen, setIsOpen, name }) => {
	const editContext = useEditContext();
	const { isEditing, setIsEditing } = editContext;
	return (
		<div className='header'>
			<h2>
				{name || 'Panel'}
			</h2>
			<ButtonInput
				isActive={isEditing}
				onClick={() => setIsEditing(!isEditing)}
			>
				{isEditing ? 'done' : 'edit'}
			</ButtonInput>
		</div>
	);
};


export const Panel = ({ dataList, setDataList, panelMode }) => {
	const [isOpen, setIsOpen] = useState(true);
	const onInsertBelow = () => setDataList([...dataList, dataList[dataList.length - 1]]);

	let name = 'Inputs';
	if (panelMode === 'output') {
		name = 'Outputs';
	}

	return (
		<StyledPanel>
			<EditContextProvider>
				<PanelHeader isOpen={isOpen} setIsOpen={setIsOpen} name={name} />
				{isOpen && (
					<div className='body'>
						{
							dataList.map((data, i) => {
								const isLast = i === dataList.length - 1;
								return (
									<Subpanel
										key={data.id}
										name={data.name}
										i={i}
										dataList={dataList}
										setDataList={setDataList}
										panelMode={panelMode}
									/>
								);
							})
						}
						{
							<NewSubpanelButton onClick={onInsertBelow} />
						}
					</div>
				)}
			</EditContextProvider>
		</StyledPanel>
	);
}

export default Panel;
