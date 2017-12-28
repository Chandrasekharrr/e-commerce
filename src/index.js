import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from './components/App';
const root = document.getElementById('root');

fetch('/api/')
    .then(resp => resp.json())
    .then(data => {
        return ReactDOM.render(
            <App initialData={data.post} />,
            root
        );
    })