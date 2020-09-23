import React from 'react';
import './Docs.css';

import Fold from './Fold';
import ModelDocs from './ModelDocs';
import TheoryDocs from './TheoryDocs';

const Docs = () => (
	<div className="docs">
		<ModelDocs />
		<TheoryDocs />
	</div>
);

export default Docs;
