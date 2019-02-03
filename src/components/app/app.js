import React, { Component } from 'react';

import './app.css'

// Components
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

export default class App extends Component {
    render() {
        return (
            <div className="stardb-app">
                <Header></Header>
                <RandomPlanet></RandomPlanet>

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList></ItemList>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails></PersonDetails>
                    </div>
                </div>
            </div>
        )
    }
}
