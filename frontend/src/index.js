import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/style.min.css';

import './styles/index.css';
import './styles/style-reset.css'
import App from './components/app/App';
import registerServiceWorker from './registerServiceWorker';


const root = ReactDOM.createRoot(document.getElementById('root'));
// registerServiceWorker()
root.render(
        <App />
 
);

