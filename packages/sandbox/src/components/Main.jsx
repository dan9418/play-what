
import React from 'react';
import 'react-hot-loader';
import { hot } from 'react-hot-loader/root';
import NavBar from './NavBar/NavBar';
import Stage from './Stage/Stage';

const Main = () => {
	return (
		<>
			<NavBar />
			<Stage />
		</>
	);
};

export default hot(Main);
