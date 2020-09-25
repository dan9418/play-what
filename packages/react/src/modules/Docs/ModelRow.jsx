import React from "react";
import Meter from "../viewers/Meter/Meter";
import Output from "../viewers/Output/Output";
import "./Docs.css";

const ModelRow = ({ label, modelType, podType, theoryType, value, setValue, max }) => {
	return (
		<div className='model-row'>
			<div>
				<label>{`${label}:`}</label>
				<span>{modelType}</span>
			</div>
			<Output modelType={modelType} podType={podType} value={value} setValue={setValue} max={max} />
			<Meter modelType={modelType} podType={podType} value={value} setValue={setValue} max={max} />
		</div>
	);
}

export default ModelRow;
