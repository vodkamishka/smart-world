import React from "react";
import ReactDOM from 'react-dom';
import './index.scss';
import store from '../src/redux/store';
import { Provider } from 'react-redux';
import App from './components/app/app';
import {BrowserRouter as Router} from 'react-router-dom';


ReactDOM.render(
    <Provider store= {store}>
        <Router>
            <App />
        </Router>
    </Provider>
,document.getElementById('root'));


