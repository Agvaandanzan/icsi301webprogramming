import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import States from './components/states/States'
import Example from './components/example/Example'
import { HashRouter, Route, Link } from "react-router-dom";
import AagiHead from './components/header/Header'
import './p5.css'

ReactDOM.render(
    <div>
        <AagiHead/>
        <HashRouter>
            <div>
                <button className="but">
                    <Link className="but" to='/states'>
                        States
                    </Link>
                </button>
                <button className="but">
                    <Link className="but" to='/example'>
                        Example
                    </Link>
                </button>
                    <Route path="/states" component={States}></Route>
                    <Route path="/example" component={Example}></Route>
            </div>
        </HashRouter>
    </div>,
    document.getElementById('reactapp'),
  );