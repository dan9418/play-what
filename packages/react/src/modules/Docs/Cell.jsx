import React, { useState } from "react";
import Fretboard from "../viewers/Fretboard/Fretboard";
import "./Docs.css";
import pw_core from '@pw/core';
import ModelRow from "./ModelRow";

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
		<table className="cell-table">
			<thead>
				<tr>
					<th>Prop</th>
					<th>Model Type</th>
					<th>Name</th>
					<th>Edit</th>
				</tr>
			</thead>
			<tbody>
				<ModelRow label='a' modelType="vector" podType="note" value={a} setValue={setA} />
				<ModelRow label='B' modelType="matrix" podType="interval" value={B} setValue={setB} />
			</tbody>
			<tfoot>
				<ModelRow label='C' modelType="matrix" podType="note" value={cell.C} />
			</tfoot>
		</table>
	);
};

export default Cell;

// 			<Fretboard projection={projection} />
