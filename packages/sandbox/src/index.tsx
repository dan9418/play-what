import 'react-hot-loader'
import React from "react";
import ReactDOM from 'react-dom'
import App from './components/App';
import './styles/index.css';

const appContainer = document.querySelector('#app')
/* @ts-ignore */
if (module.hot) {
	/* @ts-ignore */
	module.hot.accept();
	if (appContainer) ReactDOM.render(<App />, appContainer);
}
else if (appContainer) {
	ReactDOM.render(<App />, appContainer);
}
