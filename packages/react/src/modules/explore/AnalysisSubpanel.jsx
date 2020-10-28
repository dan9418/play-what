import React, { useState } from "react";
import usePodContext from "../other/PodContext";
import DropdownInput from "../ui/DropdownInput/DropdownInput";
import Fretboard from '../viewers/Fretboard/_module';
import Meter from "../viewers/Meter/Meter";

import EditDash from './EditDash';

const ANALYSIS_OPTIONS = [
	{
		id: 'meter',
		name: 'Meter',
		component: Meter
	},
	{
		id: 'fretboard',
		name: 'Fretboard',
		component: Fretboard.component
	}
];

const AnalysisSubpanel = () => {
	const podContext = usePodContext();
	const { modelType, podType, theoryType, value, setValue } = podContext;

	const [analysis, setAnalysis] = useState(ANALYSIS_OPTIONS[0]);
	const [isEditing, setIsEditing] = useState(false);

	const Component = analysis.component;

	return (
		<div className='subpanel'>
			<EditDash name="Analysis" isEditing={isEditing} setIsEditing={setIsEditing} />
			{isEditing && <DropdownInput options={ANALYSIS_OPTIONS} setValue={setAnalysis} />}
			<div>
				<Component value={value} modelType={modelType} podType={podType} theoryType={theoryType} />
			</div>
		</div>
	);
};

export default AnalysisSubpanel;
