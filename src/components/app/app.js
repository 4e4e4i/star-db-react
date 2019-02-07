import React, {Component} from 'react';

// Components
import Header from '../header';
import RandomPlanet from '../random-planet';
import {PersonList, StarshipList, PlanetList, PersonDetails, PlanetDetails, StarshipDetails } from "../sw-components";
import ErrorBoundry from "../error-boundry";
import SwapiService from "../../services/swapi-service";

import { SwapiServiceProvider } from "../swapi-service-context";

// Styles
import './app.css'

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true
    };

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        })
    };

    render() {

        const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
                    <div className="stardb-app">
                        <Header/>
                        { planet }

                        <button
                            className="toggle-planet btn btn-warning btn-lg"
                            onClick={this.toggleRandomPlanet}>
                            Toggle random planet
                        </button>


                        <PersonDetails itemId={5}/>
                        <PlanetDetails itemId={8}/>
                        <StarshipDetails itemId={9}/>

                        <PersonList />

                        <StarshipList />

                        <PlanetList />
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        )
    }
}
