import ZoomButton from '@pw/react/src/ui/ButtonInput/ZoomButton';
import React from 'react';
import { LEVEL } from '../core/config';
import Subpanel from '../ui/Subpanel';

export const NamedKeyedList = ({ data, childLevelId }) => {
	const childLevel = LEVEL[childLevelId];
	const { name, levelId } = childLevel;
	const level = LEVEL[levelId];

	return data.data.map((item, i) => {
		const preview = level.getPreview(data);
		return (
			<div key={item.id} className="pod-wrapper">
				<div>{i}</div>
				<Subpanel name={item.name} caption={childLevel.name} preview={preview} />
				<ZoomButton name={item.name} levelId={levelId} pathId={item.id} />
			</div>
		);
	})
};

export const NamedList = ({ data, childLevelId }) => {
	const childLevel = LEVEL[childLevelId];
	const { name, levelId } = childLevel;
	const level = LEVEL[levelId];

	return data.data.map((item, i) => {
		const preview = level.getPreview(item);
		return (
			<div key={i} className="pod-wrapper">
				<div>{i}</div>
				<Subpanel name={i} caption={childLevel.name} preview={preview} />
				<ZoomButton name={`${name} ${i}`} levelId={levelId} pathId={i} />
			</div>
		);
	})
};

export const PWObject = ({ data, properties }) => {
	return properties.map((property, i) => {
		const { name, levelId, propertyId } = property;
		const level = LEVEL[levelId];
		const preview = level.getPreview(data[propertyId]);
		return (
			<div key={propertyId} className="pod-wrapper">
				<div>{i}</div>
				<Subpanel name={name} caption={level.name} preview={preview} />
				<ZoomButton name={name} levelId={levelId} pathId={propertyId} />
			</div>
		);
	})
};

export const List = ({ data, childLevelId }) => {
	const childLevel = LEVEL[childLevelId];
	const { name, levelId } = childLevel;
	const level = LEVEL[levelId];

	return data.map((item, i) => {
		const preview = level.getPreview(item);
		return (
			<div key={i} className="pod-wrapper">
				<div>{i}</div>
				<Subpanel name={i} caption={childLevel.name} preview={preview} />
				<ZoomButton name={`${name} ${i}`} levelId={levelId} pathId={i} />
			</div>
		);
	})
};

export const LabeledList = ({ data, childLevelId, labels }) => {
	const childLevel = LEVEL[childLevelId];
	const { levelId } = childLevel;
	const level = LEVEL[levelId];

	return data.map((item, i) => {
		const label = labels[i];
		const { name, pathId } = label;
		const preview = level.getPreview(item);
		return (
			<div key={pathId} className="pod-wrapper">
				<div>{i}</div>
				<Subpanel name={name} caption={childLevel.name} preview={preview} />
				<ZoomButton name={name} levelId={levelId} pathId={i} />
			</div>
		);
	})
};

export const Native = ({ data }) => {
	return (
		<div>
			{data}
		</div>
	);
};
