import ZoomButton from '@pw/react/src/ui/ButtonInput/ZoomButton';
import React from 'react';
import styled from 'styled-components';
import { useLevelContext } from '../../contexts/LevelContext';
import Panel from '../ui/Panel';
import { LEVEL, LEVEL_ID, TYPE, TYPE_ID } from '../core/config';
import BreadcrumbList from '../core/BreadcrumbList';
import { useDataContext } from '../../contexts/DataContext';

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

const NamedList = ({ data, childLevel }) => {

	const { subpanelComponent: SubpanelComponent, name, levelId } = childLevel;

	return data.map((item, i) => {
		return (
			<div key={i} className="pod-wrapper">
				<div>{i}</div>
				<SubpanelComponent data={item} />
				<ZoomButton name={`${name} ${i}`} levelId={levelId} pathId={i} />
			</div>
		);
	})
};

const NamedKeyedList = ({ data, childLevel }) => {

	const { subpanelComponent: SubpanelComponent, name, levelId } = childLevel;

	return data.map((item, i) => {
		return (
			<React.Fragment key={item.id}>
				<h2>{item.name}<ZoomButton name={item.name} levelId={levelId} pathId={item.id} /></h2>
				<SubpanelComponent data={item} />
			</React.Fragment>
		);
	})
};

const LabeledList = ({ data, childLevel, labels }) => {

	const { subpanelComponent: SubpanelComponent, levelId } = childLevel;

	return data.map((item, i) => {
		const label = labels[i];
		const { name, pathId } = label;
		return (
			<React.Fragment key={pathId}>
				<h2>{name}<ZoomButton name={name} levelId={levelId} pathId={i} /></h2>
				<SubpanelComponent data={item} />
			</React.Fragment>
		);
	})
};

const PWObject = ({ data, properties }) => {
	return properties.map((property, i) => {
		const { name, levelId, propertyId } = property;
		const { subpanelComponent: SubpanelComponent } = LEVEL[levelId];
		return (
			<React.Fragment key={propertyId}>
				<h2>{name}<ZoomButton name={name} levelId={levelId} pathId={propertyId} /></h2>
				<SubpanelComponent data={data[propertyId]} />
			</React.Fragment>
		);
	})
};

const Explorer = () => {
	const { pathHead } = useLevelContext();
	const { levelData } = useDataContext();

	const { levelId, pathId, name } = pathHead;

	const levelName = LEVEL[levelId].name;
	const levelTypeId = LEVEL[levelId].typeId;
	const typeName = TYPE[levelTypeId].name;
	const caption = `${levelName} | ${typeName}`;
	const preview = 'preview';

	let content = null;

	if (levelTypeId === TYPE_ID.NamedKeyedList) {
		if (levelId === LEVEL_ID.Chart) {
			content = <NamedKeyedList data={levelData.data} childLevel={LEVEL[LEVEL_ID.Section]} />;
		}
	}
	else if (levelTypeId === TYPE_ID.NamedList) {
		if (levelId === LEVEL_ID.Section) {
			content = <NamedList data={levelData.data} childLevel={LEVEL[LEVEL_ID.Block]} />;
		}
	}
	else if (levelTypeId === TYPE_ID.Object) {
		if (levelId === LEVEL_ID.Block) {
			const properties = [
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
			];
			content = <PWObject data={levelData} properties={properties} />;
		}
	}
	else if (levelTypeId === TYPE_ID.List) {
		if (levelId === LEVEL_ID.PodList) {
			content = <NamedList data={levelData} childLevel={LEVEL[LEVEL_ID.Pod]} />;
		}
	}
	else if (levelTypeId === TYPE_ID.LabeledList) {
		if (levelId === LEVEL_ID.Pod) {
			content = <LabeledList
				data={levelData}
				childLevel={LEVEL[LEVEL_ID.PodIndex]}
				labels={[
					{ pathId: 'pitch', name: 'Pitch' },
					{ pathId: 'degree', name: 'Degree' }
				]}
			/>;
		}
	}
	else if (levelTypeId === TYPE_ID.Native) {
		if (levelId === LEVEL_ID.PodIndex) {
			content = <div>{`Data: ${levelData}`}</div>;
		}
	}

	return (
		<StyledPage>
			<BreadcrumbList />
			<Panel name={name} caption={caption} preview={preview}>
				{content}
			</Panel>
		</StyledPage>
	);
};

export default Explorer;
