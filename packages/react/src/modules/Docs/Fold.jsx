import React, { useState } from "react";
import "./Docs.css";

const Fold = ({ label, children }) => {
	const [open, setOpen] = useState(false);
	return (
		<div className="fold">
			<h1 onClick={() => setOpen(!open)}>{label}</h1>
			{open && children}
		</div>
	);
};

export default Fold;
