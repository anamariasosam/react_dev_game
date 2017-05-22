import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons/css/tachyons.css'
import './styles/App.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
