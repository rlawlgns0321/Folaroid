import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './modules';
import { Provider } from 'react-redux';
import { auth } from './modules/auth';

const store = configureStore({ reducer: rootReducer });
const root = ReactDOM.createRoot(document.getElementById('root'));

function loadUser() {
    try {
        console.log('loadUser');
        const user = localStorage.getItem('user');
        if (!user) return;
        store.dispatch(auth.actions.tempSetUser({ user }));
    } catch (e) {
        console.log(e);
    }
}

loadUser();

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
