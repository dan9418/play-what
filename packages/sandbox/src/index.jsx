import 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import Main from './components/Main';
import './styles/index.css';
import './styles/theme.css';

const appContainer = document.querySelector('#app')

if (module.hot) {
	module.hot.accept();
	if (appContainer) ReactDOM.render(<Main />, appContainer);
}
else if (appContainer) {
	ReactDOM.render(<Main />, appContainer);
}
