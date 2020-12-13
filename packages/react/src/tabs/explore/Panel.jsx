import React, { useState } from "react";
import useEditContext, { EditContextProvider } from "../../other/EditContext";
import ButtonInput from '../../ui/ButtonInput/ButtonInput';
import styled from 'styled-components';
import { NewSubpanelButton } from "./Subpanel";

const StyledPanel = styled.div`
    width: 100%;
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
				{name}
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


export const Panel = ({ name, dataList, setDataList, subpanelComponent }) => {
	const [isOpen, setIsOpen] = useState(true);
	const onInsertBelow = () => setDataList([...dataList, dataList[dataList.length - 1]]);

	return (
		<StyledPanel>
			<EditContextProvider>
				<PanelHeader isOpen={isOpen} setIsOpen={setIsOpen} name={name} />
				{isOpen && (
					<div className='body'>
						{
							dataList.map((data, i) => {
								const setData = data => setDataList([...dataList.slice(0, i), data, ...dataList.slice(i + 1)]);
								const isLast = i === dataList.length - 1;
								const SubpanelComponent = subpanelComponent;
								return null;
								return (
									<SubpanelComponent key={i} i={i} name={data.name} dataList={dataList} setDataList={setDataList} />
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
