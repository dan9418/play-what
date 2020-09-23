import './Docs.css';
import PW_Core from '@pw/core';
import React, { useState } from "react";
import Meter from '../viewers/Meter/Meter';
import PodListInput from '../models/math/PodListInput/PodListInput';
import PodInput from '../models/math/PodInput/PodInput';
import InputRow from './InputRow';
import ModelRow from './ModelRow';
import Fold from './Fold';

const max = [12, 7];

export const GenericFunctionDocs = ({ config }) => {
	const { id, name, fn, props: propsIn, propDefs, outDef } = config;

	const [props, setProps] = useState(propsIn);
	const setProp = (pName, pValue) => {
		const newProps = {
			...props,
			[pName]: pValue
		}
		setProps(newProps);
	};

	const out = fn(props);

	return (
		<Fold label={name} level={4}>
			<div className="card">
				{propDefs.map((p, i) => {
					const { name, mathType, theoryType } = p;
					const value = props[name];
					const setValue = v => setProp(name, v);
					return <ModelRow key={i} value={value} setValue={setValue} max={max} label={name} mathType={mathType} theoryType={theoryType} />;
				})}
				<ModelRow value={out} max={max} label={outDef.name} mathType={outDef.mathType} theoryType={outDef.theoryType} />
			</div>
		</Fold>
	);
}

export const GenericModuleDocs = ({ config }) => {
	const { id, name, functions } = config;
	return (
		<Fold label={config.name} level={3}>
			{functions.map((c, i) => {
				return <GenericFunctionDocs config={c} key={i} />;
			})}
		</Fold>
	);
}
