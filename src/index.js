import React from 'react'
import ReactDOM from 'react-dom';
import AppProvider from './context-provider'
import '@fortawesome/fontawesome-free/css/all.css'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<AppProvider />, document.getElementById('root'));


serviceWorker.unregister();
