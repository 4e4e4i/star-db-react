import React, {Component} from 'react';

// Components
import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import ErrorIndicator from "../error-indicator";
import ItemList from "../item-list";
import ItemDetails, { Record } from "../item-details/item-details";

// Services
import SwapiService from "../../services/swapi-service";

// Styles
import './app.css'
import Row from "../row";

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

        const { getPerson,
                getStarship,
                getPersonImage,
                getStarshipImage } = this.swapiService;

        const personDetails = (
            <ItemDetails
                getData={getPerson}
                getImageUrl={getPersonImage}
                itemId={11}>

                <Record field="gender" label="Gender" />
                <Record field="eyeColor" label="Eye Color" />

            </ItemDetails>
        );

        const starshipDetails = (
            <ItemDetails
                getData={getStarship}
                getImageUrl={getStarshipImage}
                itemId={5}>

                <Record field="model" label="Model" />
                <Record field="length" label="Length" />
                <Record field="costInCredits" label="Cost" />

            </ItemDetails>
        );

        return (
            <div className="stardb-app">
                <Header/>
                { planet }

                <button
                    className="toggle-planet btn btn-warning btn-lg"
                    onClick={this.toggleRandomPlanet}>
                    Toggle random planet
                </button>

                <Row left={personDetails} right={starshipDetails}/>
            </div>
        )
    }
}
