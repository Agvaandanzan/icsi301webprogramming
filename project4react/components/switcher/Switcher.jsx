import React, { Component } from 'react';
import States from '../states/States'
import Example from '../example/Example'
import AagiHead from '../header/Header'

class Switcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'states'
        }
    }

    handleButton = () => {
        this.setState({view: this.state.view == 'states' ? 'example' : 'states'});
    }
    render() {
        return (
            <div>
                <button className = "button" onClick={this.handleButton}>
                        Switch to {this.state.view == 'states' ? 'Example' : 'States'} view
                </button>
                {this.state.view == 'states' ? <States/> : <Example/> }
            </div>
        );
    }
}

export default Switcher;