import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/style-reset.css'
import './styles/style.min.css';

import App from './components/app/App';
import { createContext } from 'react';
import UserStore from './store/UserStore';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Context.Provider
        value={{
            user: new UserStore()
        }}
    >
        <App />
    </Context.Provider>
  
);

