import React, { Component } from 'react';

//Components
import './people-page.scss';
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import Row from "../row";
import ErrorBoundry from "../error-boundry"

// Services
import SwapiService from "../../services/swapi-service";

export default class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: 3
    };

    onPersonSelected = (selectedPerson) => {
        this.setState( { selectedPerson })
    };

    render() {
        const itemList = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}>
                {(i) => (
                    `${i.name} (${i.birthYear})`
                )}
            </ItemList>
        );
        const personDetails = (
            <ItemDetails itemId={this.state.selectedPerson}/>
        );

        return (
            <ErrorBoundry>
                <Row left={itemList} right={personDetails} />
            </ErrorBoundry>
        )
    }
}
