import React, { useState } from "react";
import Fretboard from "../viewers/Fretboard/Fretboard";
import "./ModelDocs.css";
import pw_core from '@pw/core';
import ModelRow from "./ModelRow";
import Explore from "../other/Explore";

const ModelDocs = () => {
	const [a, setA] = useState(pw_core.models.pod.note.preset.C.value);
	const [B, setB] = useState(pw_core.models.podList.chord.preset.Maj7.value);
	const cell = pw_core.structs.cell.from({ a, B });

	const projection = {
		colorFn: pw_core.models.index.degree.getColor,
		textFn: pw_core.models.pod.getName,
		reduced: true,
		cell
	};

	return (
		<>
			<Explore />
			<h3>Inputs</h3>
			<table className="cell-table">
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Model</th>
						<th>As</th>
						<th>Preview</th>
						<th>Edit</th>
					</tr>
				</thead>
				<tbody>
					<ModelRow label='a' modelType="pod" podType="note" value={a} setValue={setA} />
					<ModelRow label='b' modelType="podList" podType="interval" value={B} setValue={setB} />
				</tbody>
			</table>
			<h3>Outputs</h3>
			<table className="cell-table">
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Model</th>
						<th>As</th>
						<th>Preview</th>
						<th>Edit</th>
					</tr>
				</thead>
				<tbody>
					<ModelRow label='c' modelType="podList" podType="note" value={cell.C} />
				</tbody>
			</table>
		</>
	);
};

export default ModelDocs;
