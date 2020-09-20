import React from "react";
import IntegerInput from "../models/math/IntegerInput/IntegerInput";
import PodInput from "../models/math/PodInput/PodInput";
import PodListInput from "../models/math/PodListInput/PodListInput";
import Meter from "../viewers/Meter/Meter";
import "./Docs.css";

const getInputComponent = type => {
	switch(type) {
	case 'integer':
		return IntegerInput;
	case 'pod':
		return PodInput;
	case 'podList':
		return PodListInput;
	default:
		return null;
	}
}

const ModelRow = ({ label, type, value, setValue, max }) => {
	const classes = ['model-row'];
	const Input = getInputComponent(type);
	return (
		<div className={classes.join(' ')}>
			<div className="title-theory">
				<label>{label}</label>
			</div>
			<div className="input-meter">
				<div>
					<Input value={value} setValue={setValue} max={max} />
				</div>
				<div className="content">
					<Meter type={type} value={value} max={max} />
				</div>
			</div>
		</div>
	);
}

export default ModelRow;
