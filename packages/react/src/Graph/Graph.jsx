import PodUtils from '@pw/core/src/Pod.utils';
import { SCALE } from '@pw/core/src/Pod.presets';
import React from 'react';
import { MAX } from '@pw/core/src/Core.constants';
import './Graph.css';
import DEFAULT_GRAPH_PROPS from './Graph.defaults';

const Cell = props => {
	const { color } = props;
	return (
		<div className='cell'>
			{color && <div className='point' style={{ backgroundColor: color }} />}
		</div>
	);
};

const Label = ({ axis, children }) => {
	return (
		<div className={`label ${axis}`}>
			{children}
		</div>
	);
};

const getCells = (origin, pods) => {
	const cells = [];
	for (let p = MAX[0] - 1; p >= -1; p--) {
		cells.push(<Label key={'p' + p} axis='y'>{p > -1 && p}</Label>)
		for (let d = 0; d < MAX[1]; d++) {
			if (p === -1) {
				cells.push(<Label key={'d' + d} axis='x'>{d}</Label>)
			}
			else {
				const point = [p, d];
				const isOrigin = PodUtils.areEqual(origin, point);
				const isResultant = pods.findIndex(v => PodUtils.areEqual(v, point)) >= 0;
				cells.push(<Cell key={d + '-' + p} color={isOrigin ? 'red' : isResultant ? 'blue' : null} />)
			}
		}
	}
	return cells;
};

const Graph = userProps => {
	const props = { ...DEFAULT_GRAPH_PROPS, ...userProps };
	const { origin, title, xLabel, yLabel, pods, podType } = props;
	return (
		<div className="graph-container">
			<div className="graph-title">{title}</div>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<div className="y-label">{yLabel}</div>
				<div className="graph">{getCells(origin, pods)}</div>
			</div>
			<div className="x-label">{xLabel}</div>
		</div>
	);
}

export default Graph;
