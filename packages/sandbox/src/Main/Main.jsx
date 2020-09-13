
import 'react-hot-loader'
import { hot } from 'react-hot-loader/root';
import React from 'react';
import './Main.css';
import '../Common/index.css';
import NavBar from '../NavBar/NavBar';
import Stage from '../Stage/Stage';

const Main = () => {
	return (
		<>
			<NavBar />
			test
			<Stage />
		</>
	);
};

export default hot(Main);
