import React, { useEffect, useState } from "react";
import DropdownInput from '../ui/DropdownInput/DropdownInput';
import DOCS_CONFIG from "./Docs.config";
import "./Docs.css";
import FunctionPanel from "./FunctionPanel";

const MODULE = DOCS_CONFIG.modules.find(x => x.id === 'structs');
const SUBMODULE = MODULE.submodules.find(x => x.id === 'structs/cell');
const FN = SUBMODULE.functions.find(x => x.id === 'structs/cell/from');

const Docs = () => {
	const [module, setModule] = useState(MODULE);
	const [submodule, setSubmodule] = useState(SUBMODULE);
	const [fnDef, setFnDef] = useState(FN);

	useEffect(() => {
		setSubmodule(module.submodules[0]);
	}, [module.id]);

	useEffect(() => {
		setFnDef(module.submodules[0].functions[0])
	}, [submodule.id]);

	return (
		<>
			<div className="explore">
				<DropdownInput options={DOCS_CONFIG.modules} value={module} setValue={setModule} />
				<DropdownInput options={module.submodules} value={submodule} setValue={setSubmodule} />
				<DropdownInput options={submodule.functions} value={fnDef} setValue={setFnDef} />
			</div>
			<FunctionPanel fnDef={fnDef} setFnDef={setFnDef} />
		</>
	);
};

export default Docs;
