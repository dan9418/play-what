import React, { useState } from "react";
import Input from "../viewers/Input/Input";
import Output from "../viewers/Output/Output";
import Meter from "../viewers/Meter/Meter";
import "./Docs.css";

const ModelRow = ({ label, mathType, podType, value, setValue, max }) => {
	const classes = ['model-row'];
	const [showDetails, setShowDetails] = useState(false);
	return (
		<div className={classes.join(' ')}>
			<div className="title-theory">
				<label>{`${label}: ${mathType}`}</label>
			</div>
			<div className="input-meter">
				<div className="content">
					<Output mathType={mathType} podType={podType} value={value} max={max} />
					{false && <Meter mathType={mathType} podType={podType} value={value} max={max} />}
				</div>
				<div>
					<div className="show-details" onClick={() => setShowDetails(!showDetails)}>Show Details</div>
					{showDetails && false && (
						<Input value={value} setValue={setValue} max={max} mathType={mathType} podType={podType} />
					)}
				</div>
			</div>
		</div>
	);
}

export default ModelRow;
