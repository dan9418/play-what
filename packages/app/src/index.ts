import React from "react";
import ReactDOM from 'react-dom';
import 'react-hot-loader';
import App from './components/App';

const appContainer = document.querySelector('#app')
/* @ts-ignore */
if (module.hot) {
	/* @ts-ignore */
	module.hot.accept();
	if (appContainer) ReactDOM.render(React.createElement(App), appContainer);
}
else if (appContainer) {
	ReactDOM.render(React.createElement(App), appContainer);
}
