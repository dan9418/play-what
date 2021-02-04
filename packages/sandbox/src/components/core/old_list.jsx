import ButtonInput from "@pw/react/src/ui/ButtonInput/ButtonInput";
import React from "react";
import styled from 'styled-components';
import useEditContext from "../../contexts/EditContext";
import Icon from "../ui/Icon";
import PanelDelegator from "../config/Explore/PanelDelegator";

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

const StyledPanelList = styled.ul`
    width: 100%;

	& button.insert {
		width: 100%;
		max-width: 256px;
		margin: auto;

		&:last-child {
			margin-bottom: 16px;
		}
	}
`;

const StyledPanelWrapper = styled.div`
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
`;

const PanelControls = ({ onMoveUp, onMoveDown, onDelete }) => {
	return (
		<div className="controls">
			<ButtonInput onClick={onMoveUp}><Icon iconId="up" /></ButtonInput>
			<ButtonInput onClick={onDelete}><Icon iconId="delete" /></ButtonInput>
			<ButtonInput onClick={onMoveDown}><Icon iconId="down" /></ButtonInput>
		</div>
	);
};

const PanelWrapper = ({ list, setList, i, listType }) => {

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
			{isEditing && <ButtonInput className="insert" onClick={onInsertAbove}>+ Add</ButtonInput>}
			<StyledPanelWrapper>
				<PanelDelegator data={data} setData={setData} listType={listType} />
				{isEditing &&
					<PanelControls
						onMoveUp={onMoveUp}
						onMoveDown={onMoveDown}
						onDelete={onDelete}
					/>
				}
			</StyledPanelWrapper>
			{isLast && isEditing && <ButtonInput className="insert" onClick={onInsertBelow}>+ Add</ButtonInput>}
		</>
	);
}

const PanelList = ({ list, setList, listType }) => {
	return (
		<StyledPanelList>
			{
				list.map((item, i) => {
					return (
						<PanelWrapper
							key={item.id}
							i={i}
							list={list}
							setList={setList}
							listType={listType}
						/>
					);
				})
			}
		</StyledPanelList>
	);
};

export default PanelList;
