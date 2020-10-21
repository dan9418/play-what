import React, { useState } from "react";
import Explore from "../other/Explore";
import DOCS_CONFIG from "./Docs.config";
import "./Docs.css";
import FunctionPanel from "./FunctionPanel";

const FN = DOCS_CONFIG.modules[0].submodules[0].functions[0];

const Docs = () => {
	const [fnDef, setFnDef] = useState(FN);

	return (
		<>
			<Explore />
			<FunctionPanel fnDef={fnDef} />
		</>
	);
};

export default Docs;
