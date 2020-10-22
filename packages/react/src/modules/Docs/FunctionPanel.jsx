import React, { useEffect, useState } from "react";
import "./Docs.css";
import ModelPanel from "./ModelPanel";

const getProps = propDefs => propDefs.reduce((prev, cur, i) => {
	return {
		...prev,
		[cur.name]: cur.value
	};
}, {});

const FunctionPanel = ({ fnDef }) => {

	const [fnProps, setFnProps] = useState(null);
	const [fnResult, setFnResult] = useState(null);
	useEffect(() => {
		const newProps = getProps(fnDef.propDefs);
		setFnProps(newProps);
		const newResult = fnDef.fn(newProps);
		setFnResult(newResult);
	}, [fnDef.id])

	console.log('dpb - fn', fnProps, fnResult)

	if (!fnProps || !fnResult) return null;

	return (
		<>
			{
				fnDef.propDefs.map((v, i) => {
					const setProp = p => setFnProps({ ...fnProps, [v.name]: p });
					return (
						<ModelPanel
							key={i}
							label={v.name}
							modelType={v.modelType}
							podType={v.podType}
							value={fnProps[v.name]}
							setValue={setProp}
						/>
					);
				})
			}
			<ModelPanel
				label={fnDef.outDef.name}
				modelType={fnDef.outDef.modelType}
				podType={fnDef.outDef.podType}
				value={fnResult.notes || fnResult}
				setValue={null}
			/>
		</>
	);
}

export default FunctionPanel;
