import 'react-hot-loader'
const React = require("react");
import ReactDOM from 'react-dom'
import App from './components/App';
import './styles/index.css';

const appContainer = document.querySelector('#app')

if (module.hot) {
	module.hot.accept();
	if (appContainer) ReactDOM.render(<App />, appContainer);
}
else if (appContainer) {
	ReactDOM.render(<App />, appContainer);
}
