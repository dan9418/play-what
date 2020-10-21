import React from "react";
import "./Docs.css";
import ModelPanel from "./ModelPanel";

const FunctionPanel = ({ fnDef }) => {

	const props = fnDef.props.reduce((prev, cur, i) => {
		return {
			...prev,
			[cur.name]: cur.value
		};
	}, {})

	const result = fnDef.fn(props);

	return (
		<>
			{
				fnDef.props.map((v, i) => {
					return (
						<ModelPanel
							key={i}
							label={v.name}
							modelType={v.modelType}
							podType={v.podType}
							theoryType={v.theoryType}
							value={props[v.name]}
							setValue={null}
						/>
					);
				})
			}
			<ModelPanel label='Notes' modelType="podList" podType="note" value={result} />
		</>
	);
}

export default FunctionPanel;
