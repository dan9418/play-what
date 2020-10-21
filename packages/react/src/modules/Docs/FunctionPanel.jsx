import React from "react";
import "./Docs.css";
import ModelPanel from "./ModelPanel";

const FunctionPanel = ({ fnDef }) => {

	const props = fnDef.propDefs.reduce((prev, cur, i) => {
		return {
			...prev,
			[cur.name]: cur.value
		};
	}, {})

	const result = fnDef.fn(props);

	return (
		<>
			{
				fnDef.propDefs.map((v, i) => {
					return (
						<ModelPanel
							key={i}
							label={v.name}
							modelType={v.modelType}
							podType={v.podType}
							value={props[v.name]}
							setValue={null}
						/>
					);
				})
			}
			<ModelPanel
				label={fnDef.outDef.name}
				modelType={fnDef.outDef.modelType}
				podType={fnDef.outDef.podType}
				value={result.notes}
				setValue={null}
			/>
		</>
	);
}

export default FunctionPanel;
