import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

fetch('/api/')
    .then(resp => resp.json())
    .then(data => {
        return ReactDOM.render(
            <App initialData={data.post} />,
            document.getElementById('root')
        );
    })