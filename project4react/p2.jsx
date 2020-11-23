import React from 'react';
import ReactDOM from 'react-dom';

import AagiHead from './components/header/Header'

import States from './components/states/States';

ReactDOM.render(
    <div>
        <AagiHead/>
        <States />
    </div>,
  document.getElementById('reactapp'),
);
