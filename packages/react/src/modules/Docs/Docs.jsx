import ScalarDocs from './ScalarDocs';
import React from 'react';
import VectorDocs from './VectorDocs';
import MatrixDocs from './MatrixDocs';

const Docs = () => (
	<div className="docs">
		<ScalarDocs />
		<VectorDocs />
		<MatrixDocs />
	</div>
);

export default Docs;
