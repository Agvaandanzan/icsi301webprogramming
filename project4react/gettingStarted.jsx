import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import AagiHead from './components/header/Header'
import Example from './components/example/Example';

ReactDOM.render(
  <div>
        <AagiHead/>
        <Example />
    </div>,
  document.getElementById('reactapp'),
);
