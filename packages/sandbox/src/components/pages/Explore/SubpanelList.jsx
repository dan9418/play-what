import ButtonInput from "@pw/react/src/ui/ButtonInput/ButtonInput";
import React from "react";
import styled from 'styled-components';
import useEditContext from "../../../contexts/EditContext";
import { InputContextProvider } from "../../../contexts/InputContext";
import { OutputContextProvider } from "../../../contexts/OutputContext";
import Icon from "../../Icon";
import InputSubpanelContent from "./input/InputSubpanelContent";
import ViewerBox from "./output/ViewerBox";
import Subpanel from "./Subpanel";

export const getListHelpers = (list, setList, i) => {
	const isLast = i === list.length - 1;
	const data = list[i];
	const setData = data => setList([
		...list.slice(0, i),
		data,
		...list.slice(i + 1)
	]);
	const onInsertAbove = () => setList([
		...list.slice(0, i),
		list[i],
		...list.slice(i)
	]);
	const onInsertBelow = () => setList([
		...list,
		list[list.length - 1]
	]);
	const onMoveUp = () => setList([
		...list.slice(0, i - 1),
		list[i],
		list[i - 1],
		...list.slice(i + 1)
	]);
	const onDelete = () => setList([
		...list.slice(0, i),
		...list.slice(i + 1)
	]);
	const onMoveDown = () => setList([
		...list.slice(0, i),
		list[i + 1],
		list[i],
		...list.slice(i + 2)
	]);

	return {
		isLast,
		data,
		setData,
		onInsertAbove,
		onInsertBelow,
		onMoveUp,
		onMoveDown,
		onDelete
	};
};

const StyledSubpanelList = styled.ul`
    width: 100%;
`;

const StyledSubpanelWrapper = styled.div`
	display: flex;
    width: 100%;
    justify-content: center;
	align-items: center;
	margin: 16px 0;
	
	& .controls {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		& button {
			margin: 0 0 16px 16px;
		}

		& svg {
			height: 16px;
			width: 16px;
			fill: #fff;
		}
	}
	
	& button.delete {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-weight: bold;
		color: white;
	}

	& .new-subpanel-button {
		text-align: center;
		margin-bottom: 16px;
		width: 100%;
		max-width: 256px
	}
`;

const SubpanelControls = ({ onMoveUp, onMoveDown, onDelete }) => {
	return (
		<div className="controls">
			<ButtonInput onClick={onMoveUp}><Icon iconId="up" /></ButtonInput>
			<ButtonInput onClick={onDelete}><Icon iconId="delete" /></ButtonInput>
			<ButtonInput onClick={onMoveDown}><Icon iconId="down" /></ButtonInput>
		</div>
	);
};

const SubpanelDelegator = ({ data, setData, listType }) => {

	let Context = React.Fragment;
	let Content = React.Fragment;
	switch (listType) {
	case 'input':
		Context = InputContextProvider;
		Content = InputSubpanelContent;
		break;
	case 'output':
		Context = OutputContextProvider;
		Content = ViewerBox;
		break;
	}

	return (
		<Context data={data} setData={setData}>
			<Content />
		</Context>
	);
};

const SubpanelWrapper = ({ list, setList, i, listType }) => {

	const { isEditing } = useEditContext();

	const {
		isLast,
		data,
		setData,
		onInsertAbove,
		onInsertBelow,
		onMoveUp,
		onMoveDown,
		onDelete
	} = getListHelpers(list, setList, i);

	return (
		<>
			{isEditing && <ButtonInput className="new-subpanel-button" onClick={onInsertAbove} />}
			<StyledSubpanelWrapper>
				<Subpanel name={data.name}>
					<SubpanelDelegator data={data} setData={setData} listType={listType} />
				</Subpanel>
				{isEditing &&
					<SubpanelControls
						onMoveUp={onMoveUp}
						onMoveDown={onMoveDown}
						onDelete={onDelete}
					/>
				}
			</StyledSubpanelWrapper>
			{isLast && isEditing && <ButtonInput className="new-subpanel-button" onClick={onInsertBelow} />}
		</>
	);
}

const SubpanelList = ({ list, setList, listType }) => {
	return (
		<StyledSubpanelList>
			{
				list.map((item, i) => {
					return (
						<SubpanelWrapper
							key={item.id}
							i={i}
							list={list}
							setList={setList}
							listType={listType}
						/>
					);
				})
			}
		</StyledSubpanelList>
	);
};

export default SubpanelList;
