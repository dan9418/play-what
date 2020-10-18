import React, { useState } from "react";
import Fretboard from "../viewers/Fretboard/Fretboard";
import "./ModelDocs.css";
import pw_core from '@pw/core';
import ModelRow from "./ModelRow";
import Explore from "../other/Explore";
import DOCS_CONFIG from "./ModelDocs.config";

const FN = DOCS_CONFIG.modules[0].submodules[0].functions[0];

const ModelDocs = () => {
	const [fn, setFn] = useState(FN);

	const props = fn.props.reduce((prev, cur, i) => {
		return {
			...prev,
			[cur.name]: cur.value
		};
	}, {})

	console.log(props)

	const result = fn.fn(props);

	return (
		<>
			<Explore />
			{
				fn.props.map((v, i) => {
					return (
						<ModelRow key={i} label={v.name} modelType={v.modelType} podType={v.podType} value={props[v.name]} setValue={null} />
					);
				})
			}
			<ModelRow label='c' modelType="podList" podType="note" value={result} />
		</>
	);
};

export default ModelDocs;
