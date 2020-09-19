import IntegerDocs from './IntegerDocs';
import React from 'react';
import PodDocs from './PodDocs';
import PodListDocs from './PodListDocs';

const Docs = () => (
	<div className="docs">
		<h1>Models</h1>
		<IntegerDocs />
		<PodDocs />
		<PodListDocs />
		<h1>Theory</h1>
	</div>
);

export default Docs;
