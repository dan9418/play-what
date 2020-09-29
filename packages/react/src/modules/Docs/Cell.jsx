import React, { useState } from "react";
import Fretboard from "../viewers/Fretboard/Fretboard";
import "./Docs.css";
import pw_core from '@pw/core';

const Cell = () => {
	const [a, setA] = useState([0, 0]);
	const [B, setB] = useState([]);
	const C = pw_core.models.struct.cell.evaluate({ a, B });
	const cell = { a, B, C };
	return (
		<div className="cell">
			<Fretboard />
		</div>
	);
};

export default Cell;
