import ZoomButton from '@pw/react/src/ui/ButtonInput/ZoomButton';
import React from 'react';
import styled from 'styled-components';
import { useLevelContext } from '../core/Level';
import Panel from '../ui/Panel';
import { LEVEL, LEVEL_ID, TYPE, TYPE_ID } from './pages';

const StyledPage = styled.div`
	.panel-body {
		display: flex;
		align-items: center;
		flex-direction: column;

        > * {
			margin: 16px 0;
		}
	}

	h2 {
		width: 100%;
		max-width: 512px;
		margin: 32px 0 16px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

    .pod-wrapper {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		max-width: 512px;
		>:first-child {
			font-weight: bold;
			margin-right: 8px;	
		}
		>:nth-child(2) {
			width: 100%;
			margin-right: 8px;	
		}
	}
`;

const getNamedList = (list, childLevel) => {

	const { subpanelComponent: SubpanelComponent, name, levelId } = childLevel;

	return list.map((item, i) => {
		return (
			<div key={i} className="pod-wrapper">
				<div>{i}</div>
				<SubpanelComponent data={item} />
				<ZoomButton name={`${name} ${i}`} levelId={levelId} pathId={i} />
			</div>
		);
	})
};

const getNamedKeyedList = (list, childLevel) => {

	const { subpanelComponent: SubpanelComponent, name, levelId } = childLevel;

	return list.map((item, i) => {
		return (
			<>
				<h2>{item.name}<ZoomButton name={item.name} levelId={levelId} pathId={item.id} /></h2>
				<SubpanelComponent data={item} />
			</>
		);
	})
};

const getLabeledList = (list, childLevel, labels) => {

	const { subpanelComponent: SubpanelComponent, levelId } = childLevel;

	return list.map((item, i) => {
		const label = labels[i];
		const { name, pathId } = label;
		return (
			<>
				<h2>{name}<ZoomButton name={name} levelId={levelId} pathId={i} /></h2>
				<SubpanelComponent data={item} />
			</>
		);
	})
};

const getObject = (data, properties) => {
	return properties.map((property, i) => {
		const { name, levelId, propertyId } = property;
		const { subpanelComponent: SubpanelComponent } = LEVEL[levelId];
		return (
			<>
				<h2>{name}<ZoomButton name={name} levelId={levelId} pathId={propertyId} /></h2>
				<SubpanelComponent data={data[propertyId]} />
			</>
		);
	})
};

const Page = () => {
	const { data, pathHead } = useLevelContext();

	const { levelId, pathId, name } = pathHead;

	const levelName = LEVEL[levelId].name;
	const levelTypeId = LEVEL[levelId].typeId;
	const typeName = TYPE[levelTypeId].name;
	const caption = `${levelName} | ${typeName}`;
	const preview = 'preview';

	let content = null;

	if (levelTypeId === TYPE_ID.NamedKeyedList) {
		if (levelId === LEVEL_ID.Chart) {
			content = getNamedKeyedList(data.data, LEVEL[LEVEL_ID.Section]);
		}
	}
	else if (levelTypeId === TYPE_ID.NamedList) {
		if (levelId === LEVEL_ID.Section) {
			content = getNamedList(data.data, LEVEL[LEVEL_ID.Block]);
		}
	}
	else if (levelTypeId === TYPE_ID.Object) {
		if (levelId === LEVEL_ID.Block) {
			content = getObject(data, [
				{
					propertyId: 'keyCenter',
					levelId: LEVEL_ID.Pod,
					name: 'Key Center'
				},
				{
					propertyId: 'intervals',
					levelId: LEVEL_ID.PodList,
					name: 'Intervals'
				}
			]);
		}
	}
	else if (levelTypeId === TYPE_ID.List) {
		if (levelId === LEVEL_ID.PodList) {
			content = getNamedList(data, LEVEL[LEVEL_ID.Pod]);
		}
		if (levelId === LEVEL_ID.Pod) {
			content = getLabeledList(
				data,
				LEVEL[LEVEL_ID.PodIndex],
				[
					{ pathId: 'pitch', name: 'Pitch' },
					{ pathId: 'degree', name: 'Degree' }
				]
			);
		}
	}
	else if (levelTypeId === TYPE_ID.Native) {
		if (levelId === LEVEL_ID.PodIndex) {
			content = <div>{`Data: ${data}`}</div>;
		}
	}

	return (
		<StyledPage>
			<Panel name={name} caption={caption} preview={preview}>
				{content}
			</Panel>
		</StyledPage>
	);
};

export default Page;
