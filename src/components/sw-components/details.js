import React from 'react';

import ItemDetails, { Record } from "../item-details/item-details";

import { SwapiServiceCosumer } from "../swapi-service-context";

const PersonDetails = ({ itemId }) => {

    return (
        <SwapiServiceCosumer>
            {
                ({getPerson, getPersonImage}) => {
                    return (
                        <ItemDetails
                            itemId={itemId}
                            getData={getPerson}
                            getImageUrl={getPersonImage} >

                            <Record field="gender" label="Gender" />
                            <Record field="eyeColor" label="Eye Color" />
                        </ItemDetails>
                    )
                }
            }
        </SwapiServiceCosumer>

    );
};

const PlanetDetails = ({ itemId }) => {
    return (
        <SwapiServiceCosumer>
            {
                ({ getPlanet, getPlanetImage }) => {
                    return (
                        <ItemDetails
                            itemId={itemId}
                            getData={getPlanet}
                            getImageUrl={getPlanetImage}>

                            <Record field="population" label="Population" />
                            <Record field="rotationPeriod" label="Rotation Period" />
                            <Record field="diameter" label="Diameter" />
                        </ItemDetails>
                    )
                }
            }
        </SwapiServiceCosumer>
    );
};

const StarshipDetails = ({ itemId }) => {
    return (
        <SwapiServiceCosumer>
            {
                ({ getStarship, getStarshipImage }) => {
                    return (
                        <ItemDetails
                            itemId={itemId}
                            getData={getStarship}
                            getImageUrl={getStarshipImage}>

                            <Record field="model" label="Model" />
                            <Record field="length" label="Length" />
                            <Record field="costInCredits" label="Cost" />
                        </ItemDetails>
                    )
                }
            }
        </SwapiServiceCosumer>
    );
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};
