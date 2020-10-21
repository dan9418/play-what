import React, { useState } from 'react';
import ButtonInput from '../ui/ButtonInput/ButtonInput';
import pw_core from "@pw/core";
import './ModelTable.css';

const ModelIO = ({ value, setValue, i, isEditing, modelType, podType, theoryType }) => {
	let output = null;
	if (modelType === 'index') {
		output = value;
	}
	else if (modelType === 'pod') {
		if (podType === 'pod') {
			output = value;
		}
		else if (podType === 'note') {
			output = pw_core.models.pod.note.getName({ a: value });
		}
		else if (podType === 'interval') {
			output = pw_core.models.pod.interval.getName({ a: value });
		}
	}
	else if (modelType === 'podList') {
		const thisValue = value[i];
		if (podType === 'pod') {
			output = thisValue;
		}
		else if (podType === 'note') {
			output = pw_core.models.pod.note.getName({ a: thisValue });
		}
		else if (podType === 'interval') {
			output = pw_core.models.pod.interval.getName({ a: thisValue });
		}
	}
	return JSON.stringify(output);
};

export default ModelIO;
