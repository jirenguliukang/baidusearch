import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import registerServiceWorker from './registerServiceWorker';
import Suggest from './App';
// import jsonp from 'jsonp';
ReactDOM.render(<Suggest />, document.getElementById('root'));
registerServiceWorker();
