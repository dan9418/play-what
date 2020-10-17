import React, { useState } from "react";
import Fretboard from "../viewers/Fretboard/Fretboard";
import "./Docs.css";
import pw_core from '@pw/core';
import ModelRow from "./ModelRow";
import Explore from "../models/Explore";

const Cell = () => {
	const [a, setA] = useState(pw_core.models.theory.note.preset.C.value);
	const [B, setB] = useState(pw_core.models.theory.chord.preset.Maj7.value);
	const cell = pw_core.models.struct.cell.from({ a, B });

	const projection = {
		colorFn: pw_core.models.theory.degree.getColor,
		textFn: pw_core.models.theory.interval.getName,
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

export default Cell;

// 			<Fretboard projection={projection} />
