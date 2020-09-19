import React, { useState } from 'react';
import Meter from '../viewers/Meter/Meter';
import InputRow from './InputRow';
import PodListInput from '../models/math/PodListInput/PodListInput';
import PW_Core from '@pw/core';
import List from '../viewers/List/List';

const RootDocs = () => {

	const [rootScale, setRootScale] = useState(PW_Core.models.theory.config.rootScale);

	console.log(rootScale)
	return (
		<div className='integer-docs'>
			<h2>Config</h2>

			<div className="card">
				<InputRow label="rootScale" x>
					<PodListInput value={rootScale} setValue={setRootScale} />
				</InputRow>

				<List value={rootScale} type="interval" />
				<Meter type='podList' value={rootScale} max={[12, 7]} />
			</div>
		</div>
	);
}

export default RootDocs;
