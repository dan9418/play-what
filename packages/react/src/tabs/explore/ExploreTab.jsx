import React, { useState } from 'react';
import DropdownInput from '../../ui/DropdownInput/DropdownInput';
import BasicDemo from './demos/BasicDemo';
import './ExploreTab.css';


const Explore = () => {
	return (
		<div className='explore-tab'>
			<BasicDemo />
		</div>
	);
};

export default Explore;
