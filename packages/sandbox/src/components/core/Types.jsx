import ZoomButton from '@pw/react/src/ui/ButtonInput/ZoomButton';
import React from 'react';
import { LEVEL } from '../core/config';
import Subpanel from '../ui/Subpanel';

export const NamedList = ({ data, childLevelId }) => {
	const childLevel = LEVEL[childLevelId];
	const { name, levelId } = childLevel;

	return data.map((item, i) => {
		return (
			<div key={i} className="pod-wrapper">
				<div>{i}</div>
				<Subpanel name={name} caption={childLevel.name} />
				<ZoomButton name={`${name} ${i}`} levelId={levelId} pathId={i} />
			</div>
		);
	})
};

export const List = NamedList;

export const NamedKeyedList = ({ data, childLevelId }) => {
	const childLevel = LEVEL[childLevelId];
	const { name, levelId } = childLevel;

	return data.map((item, i) => {
		return (
			<React.Fragment key={item.id}>
				<h2>{item.name}<ZoomButton name={item.name} levelId={levelId} pathId={item.id} /></h2>
				<Subpanel name={item.name} caption={childLevel.name} />
			</React.Fragment>
		);
	})
};

export const LabeledList = ({ data, childLevelId, labels }) => {
	const childLevel = LEVEL[childLevelId];
	const { levelId } = childLevel;

	return data.map((item, i) => {
		const label = labels[i];
		const { name, pathId } = label;
		return (
			<React.Fragment key={pathId}>
				<h2>{name}<ZoomButton name={name} levelId={levelId} pathId={i} /></h2>
				<Subpanel name={name} caption={childLevel.name} />
			</React.Fragment>
		);
	})
};

export const PWObject = ({ data, properties }) => {
	return properties.map((property, i) => {
		const { name, levelId, propertyId } = property;
		const { } = LEVEL[levelId];
		return (
			<React.Fragment key={propertyId}>
				<h2>{name}<ZoomButton name={name} levelId={levelId} pathId={propertyId} /></h2>
				<Subpanel name={name} caption={data[propertyId]} />
			</React.Fragment>
		);
	})
};
