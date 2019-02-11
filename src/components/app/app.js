import React, {Component} from 'react';

// Components
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from "../error-boundry";
import StarshipDetails from "../sw-components/starship-details";

//Pages
import {
    PeoplePage,
    PlanetsPage,
    StarshipsPage,
    LoginPage,
    SecretPage } from '../pages';

//Services
import { SwapiServiceProvider } from "../swapi-service-context";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../swapi-service-context/dummy-swapi-service";

// Styles
import './app.css'

// Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class App extends Component {

    state = {
        swapiService: new SwapiService(),
        isLoggedIn: false
    };

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        })
    };

    onServiceChange = () => {
        this.setState(({ swapiService}) => {
            const Service = swapiService instanceof SwapiService ?
                                DummySwapiService : SwapiService;

            console.log('switched to', Service.name);

            return {
                swapiService: new Service()
            }
        })
    };

    render() {

        const { isLoggedIn } = this.state;

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <Router>
                        <div className="stardb-app">
                            <Header onServiceChange={this.onServiceChange}/>

                            <RandomPlanet />

                            <Switch>
                                <Route path="/"
                                       render={() => <h2>Welcome to StardDB</h2>}
                                       exact />
                                <Route path="/people/:id?" component={PeoplePage} />
                                <Route path="/planets" component={PlanetsPage} />
                                <Route
                                    path="/starships"
                                    component={StarshipsPage}
                                    exact />
                                <Route
                                    path="/starships/:id"
                                    render={({match}) => {
                                        const { id } = match.params;
                                        return <StarshipDetails itemId={id}/>
                                    }} />
                                <Route
                                    path="/login"
                                    render={() => (
                                        <LoginPage
                                            isLoggedIn={isLoggedIn}
                                            onLogin={this.onLogin}/>
                                    )}/>
                                <Route
                                    path="/secret"
                                    render={() => (
                                        <SecretPage isLoggedIn={isLoggedIn}/>
                                    )}/>

                                <Route render={() => <h2>Page not found</h2>} />
                            </Switch>

                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        )
    }
}
