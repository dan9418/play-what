import React, { useState } from "react";
import Meter from "../viewers/Meter/Meter";
import { Edit, View} from "../viewers/Preview/Preview";
import "./Docs.css";

const ModelRow = ({ label, modelType, podType, theoryType, value, setValue, max }) => {

	const [isEditing, setIsEditing] = useState(false);
	const toggleEdit = () => setIsEditing(!isEditing);
	return (
		<div className='model-row'>
			<div>
				<label>{`${label}:`}</label>
				<span>{modelType}</span>
				<div className='edit' onClick={toggleEdit}>edit</div>
			</div>
			{isEditing ?
				<Edit value={value} modelType={modelType} setValue={setValue} podType={podType} />
				: <View value={value} modelType={modelType} setValue={setValue} podType={podType} />
			}
			<Meter modelType={modelType} podType={podType} value={value} setValue={setValue} max={max} />
		</div>
	);
}

export default ModelRow;
