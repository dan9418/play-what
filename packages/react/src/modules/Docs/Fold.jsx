import React, { useState } from "react";
import "./Docs.css";

const Fold = ({ label, level, children }) => {
	const [open, setOpen] = useState(level < 4);
	const Tag = `h${level || 1}`;
	return (
		<div className="fold">
			<Tag onClick={() => setOpen(!open)}>{label}</Tag>
			{open && children}
		</div>
	);
};

export default Fold;
