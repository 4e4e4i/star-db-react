import React, {Component} from 'react';

// Components
import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import ErrorIndicator from "../error-indicator";

import './app.css'

export default class App extends Component {

    state = {
        showRandomPlanet: true,
        hasError: false
    };

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        })
    };

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    render() {

        if (this.state.hasError) {
            return ErrorIndicator
        }

        const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;

        return (
            <div className="stardb-app">
                <Header/>
                { planet }

                <button
                    className="toggle-planet btn btn-warning btn-lg"
                    onClick={this.toggleRandomPlanet}>
                    Toggle random planet
                </button>

                <PeoplePage/>
            </div>
        )
    }
}
