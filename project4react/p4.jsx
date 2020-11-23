import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Switcher from './components/switcher/Switcher'
import AagiHead from './components/header/Header'


ReactDOM.render(
    <div>
        <AagiHead/>
        <Switcher />
    </div>,
    document.getElementById('reactapp'),
  );