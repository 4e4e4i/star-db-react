import React, {Component} from 'react';

// Components
import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import ErrorIndicator from "../error-indicator";
import ItemDetails, { Record } from "../item-details/item-details";
import {PersonList, StarshipList, PlanetList, PersonDetails, PlanetDetails, StarshipDetails } from "../sw-components";

// Services
import SwapiService from "../../services/swapi-service";

// Styles
import './app.css'

export default class App extends Component {

    swapiService = new SwapiService();

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


                <PersonDetails itemId={5}/>
                <PlanetDetails itemId={8}/>
                <StarshipDetails itemId={9}/>

                <PersonList>
                    {({name}) => <span>{name}</span>}
                </PersonList>

                <StarshipList>
                    {({name}) => <span>{name}</span>}
                </StarshipList>

                <PlanetList>
                    {({name}) => <span>{name}</span>}
                </PlanetList>
            </div>
        )
    }
}
