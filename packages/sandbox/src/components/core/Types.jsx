import ZoomButton from '@pw/react/src/ui/ButtonInput/ZoomButton';
import React from 'react';
import { LEVEL } from '../core/config';

export const NamedList = ({ data, childLevel }) => {

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

export const NamedKeyedList = ({ data, childLevel }) => {

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

export const LabeledList = ({ data, childLevel, labels }) => {

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

export const PWObject = ({ data, properties }) => {
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
