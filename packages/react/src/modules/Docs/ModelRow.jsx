import React, { useState } from "react";
import Input from "../viewers/Input/Input";
import List from "../viewers/List/List";
import Meter from "../viewers/Meter/Meter";
import "./Docs.css";

const ModelRow = ({ label, mathType, theoryType, value, setValue, max }) => {
	const classes = ['model-row'];
	const [showDetails, setShowDetails] = useState(false);
	return (
		<div className={classes.join(' ')}>
			<div className="title-theory">
				<label>{label}</label>
			</div>
			<div className="input-meter">
				<div className="content">
					<List mathType={mathType} theoryType={theoryType} value={value} max={max} />
					<Meter mathType={mathType} theoryType={theoryType} value={value} max={max} />
				</div>
				<div>
					<div className="show-details" onClick={() => setShowDetails(!showDetails)}>Show Details</div>
					{showDetails && (
						<Input value={value} setValue={setValue} max={max} mathType={mathType} theoryType={theoryType}/>
					)}
				</div>
			</div>
		</div>
	);
}

export default ModelRow;
