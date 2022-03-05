import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { AuthState } from './context/auth/authState';
import { StateState } from './context/state/stateState';
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <AuthState>
            <StateState>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </StateState>
        </AuthState>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
