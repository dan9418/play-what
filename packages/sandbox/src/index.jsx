import 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import Stage from './components/Stage';
import './styles/index.css';
import './styles/theme.css';

const appContainer = document.querySelector('#app')

if (module.hot) {
	module.hot.accept();
	if (appContainer) ReactDOM.render(<Stage />, appContainer);
}
else if (appContainer) {
	ReactDOM.render(<Stage />, appContainer);
}
