import React from 'react';
import Fold from './Fold';
import './Docs.css';

// Math
import IntegerDocs from './math/IntegerDocs';
import PodDocs from './math/PodDocs';
import PodListDocs from './math/PodListDocs';

// Theory


const Docs = () => (
	<div className="docs">
		<h1>Theory</h1>
		<Fold label="Math">
			<IntegerDocs />
			<PodDocs />
			<PodListDocs />
		</Fold>
	</div>
);

export default Docs;
